import type { Project } from "@/data/projects";

/** Keep contextual photography and original project evidence distinguishable. */
export default function VisualCredit({ project }: { project: Pick<Project, "source" | "visual" | "visualCaption" | "visualCredit"> }) {
  if (project.visualCredit) {
    const credit = project.visualCredit;
    return (
      <span>
        Equipment context · <a href={credit.source} target="_blank" rel="noreferrer" className="underline underline-offset-2">{credit.author}</a>
        {" / "}<a href={credit.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">{credit.license}</a>
        {" · "}{credit.context}
      </span>
    );
  }
  return <span>{project.visual.endsWith(".svg") ? "Public-safe explanatory illustration" : project.source === "Academic" ? "Original project / team laboratory evidence" : project.visualCaption}</span>;
}
