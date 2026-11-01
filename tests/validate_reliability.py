"""Independent QA: SciPy optimises the full two-parameter likelihood, not the browser's profile score.
Run with Python + scipy. Runtime/public reproduction uses the standard library only.
"""
import csv, json
from pathlib import Path
import numpy as np
from scipy.optimize import minimize
from scipy.integrate import quad
from scipy.special import gamma
root=Path(__file__).resolve().parents[1]
rows=list(csv.DictReader((root/'public/lab/synthetic-component-history.csv').open()))
t=np.array([float(r['age_hours']) for r in rows]); failed=np.array([r['event_status']=='failure' for r in rows]);r=failed.sum()
def objective(x):
    beta,eta=np.exp(x)
    return -(r*np.log(beta)-r*beta*np.log(eta)+(beta-1)*np.log(t[failed]).sum()-np.power(t/eta,beta).sum())
result=minimize(objective,np.log([2,8000]),method='Nelder-Mead',options={'xatol':1e-11,'fatol':1e-11,'maxiter':5000})
assert result.success
beta,eta=np.exp(result.x)
survival=lambda age: np.exp(-(age/eta)**beta)
rate=lambda age:1000*(4000*survival(age)+16000*(1-survival(age)))/quad(survival,0,age,epsabs=1e-8)[0]
values={'beta':float(beta),'eta':float(eta),'age5250':float(rate(5250)),'reactive':float(16000000/(eta*gamma(1+1/beta))),'bestAge':min(range(500,15001,250),key=rate)}
(root/'tests/independent-reference.json').write_text(json.dumps(values,indent=2)+'\n')
print(json.dumps(values,indent=2))
