"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EmptyState, ErrorState, Loading, PageHeader, StatusBadge } from "@/components/ui";
import { api } from "@/lib/api";
import type { Project } from "@/lib/types";

export default function ProjectsPage() {
  const [items, setItems] = useState<Project[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    api<Project[]>("/projects").then(setItems).catch((e) => setError(e.message));
  }, []);

  return <>
    <PageHeader eyebrow="Directory" title="Projects" description="See every active project at a glance, then open the task list behind it." action={<Link className="button" href="/projects/manage">Manage projects</Link>} />
    {error ? <ErrorState message={error} /> : !items ? <Loading /> : items.length ? <div className="card-grid">{items.map((project) => <Link className="card" href={`/projects/${project.projectId}`} key={project.projectId}><StatusBadge value={project.status} /><h3>{project.projectName}</h3><p>{project.description || "No project description yet."}</p><div className="card-meta"><span>{project.departmentName}</span><span>{project.startDate}</span></div></Link>)}</div> : <EmptyState text="No active projects yet." />}
  </>;
}
