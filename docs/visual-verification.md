# Visual-update verification — 1 November 2026

Application changes: `6d0222c`, `fcdaaf6` and `26f87e9`, on the existing PR #8 branch. Preview: https://deploy-preview-8--aminer-rhammi.netlify.app/ . Production was not merged or replaced.

Final Netlify deployment `6ae7b4e7b2640cc1bd1b4661` is ready for application commit `26f87e9`. The hosted page's Netlify frame confirms the same deploy ID; the final portrait renders at `50% 25%`. Later documentation-only commits skip deployment.

## Checks

- ESLint passed.
- Production build passed after the final portrait focal-point adjustment; 41 pages generated, including all 13 case studies and three recruiter pathways.
- Existing numerical/data/reproduction suite: 8/8 passed using the bundled Python runtime. Reliability implementation was unchanged.
- New local image files total 686,004 bytes. Both are served through the existing Next.js image pipeline. No application dependencies or package manifests changed.
- Browser checks used real hosted pages at 1,366 px, 768 px and 390 px viewport widths. Document client/scroll widths matched (1,351 / 753 / 375 px after scrollbars). These are responsive browser checks, not real-device tests.
- Homepage field portrait, discipline thumbnails and three report/prototype images loaded successfully.
- Narrow-layout Mechatronics filter displayed two projects; Selected work restored four.
- FESTO's two original report figures appear before the closed technical investigation; full-size figure links retain their image targets.
- Mechanical/reliability headers show contextual photos with source/licence links and explicit site/fleet distinctions. Mechatronics uses the original team laboratory frame.
- No application console errors were observed during the hosted-page checks.

## Review artefacts

- [Desktop homepage](qa/visual-update/home-desktop.jpg)
- [Mobile homepage](qa/visual-update/home-mobile.jpg)
- [Report/prototype notebook](qa/visual-update/notebook-desktop.jpg)
- [FESTO mobile gallery](qa/visual-update/festo-mobile.jpg)
- [Source and licence register](visual-sources.md)

The local browser could not reach the loopback development server, so visual verification used the actual Netlify Deploy Preview. The initial sandbox build could not start a compiler subprocess; the authorised build outside that sandbox completed. The initial numerical test run resolved the Windows Python alias; selecting the bundled runtime produced the passing eight-test run. No change to application code was needed for these environment issues.
