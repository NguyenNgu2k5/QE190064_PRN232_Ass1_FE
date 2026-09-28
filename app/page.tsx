"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Department, Project, Task } from "@/lib/types";
import { EmptyState, ErrorState, Loading, PageHeader, StatusBadge } from "@/components/ui";

export default function Home() {
  const [data, setData] = useState<{ departments: Department[]; projects: Project[]; tasks: Task[] }>();
  const [error, setError] = useState("");
  useEffect(() => { Promise.all([api<Department[]>("/departments"), api<Project[]>("/projects"), api<Task[]>("/tasks")]).then(([departments, projects, tasks]) => setData({ departments, projects, tasks })).catch((e) => setError(e.message)); }, []);
  return <>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">Task management, made visible</p><h1>Move work forward with clarity.</h1><p>A public workspace for departments, projects, tasks, and the small details that keep a team moving.</p><div className="actions"><Link href="/tasks/manage" className="button">Open workspace</Link><Link href="/search" className="button secondary">Find a task</Link></div></div><div className="hero-art"><p className="eyebrow">Live workspace</p><h2>Every task has a place in the bigger picture.</h2><div className="orbit" aria-hidden="true" /></div></section>
    <PageHeader eyebrow="Overview" title="A calm view of busy work." description="Explore active projects, see how work is distributed, and jump into the next useful detail." />
    {error ? <ErrorState message={error} /> : !data ? <Loading /> : <>
      <section className="metric-grid"><div className="metric"><strong>{data.departments.length}</strong><span>Active departments</span></div><div className="metric"><strong>{data.projects.length}</strong><span>Active projects</span></div><div className="metric"><strong>{data.tasks.length}</strong><span>Active tasks</span></div></section>
      <div className="section-label"><h2>Projects in motion</h2><Link href="/departments">Browse departments →</Link></div>
      {data.projects.length ? <div className="card-grid">{data.projects.slice(0, 6).map((project) => <Link className="card" href={`/projects/${project.projectId}`} key={project.projectId}><StatusBadge value={project.status} /><h3>{project.projectName}</h3><p>{project.description || "No project description yet."}</p><div className="card-meta"><span>{project.departmentName}</span><span>Starts {project.startDate}</span></div></Link>)}</div> : <EmptyState text="No active projects yet." />}
    </>}
  </>;
}
