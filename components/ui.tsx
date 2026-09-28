import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

const statuses = ["Not started", "In progress", "Completed", "On hold"];
const taskStatuses = ["To do", "In progress", "Done", "Cancelled"];
const priorities = ["Low", "Medium", "High", "Critical"];

export function StatusBadge({ value, task = false }: { value: number; task?: boolean }) { const label = (task ? taskStatuses : statuses)[value] || "Unknown"; return <span className={`badge badge-${value}`}>{label}</span>; }
export function PriorityBadge({ value }: { value: number }) { return <span className={`badge priority-${value}`}>{priorities[value] || "Unknown"}</span>; }
export function Tags({ tags }: { tags: { tagId: number; tagName: string; color?: string | null }[] }) { return <span className="tag-list">{tags.map((tag) => <span className="tag" style={{ "--tag-color": tag.color || "#64748b" } as CSSProperties} key={tag.tagId}>{tag.tagName}</span>)}</span>; }
export function Loading() { return <div className="loading" role="status"><span /> Loading data...</div>; }
export function ErrorState({ message }: { message: string }) { return <div className="error-box" role="alert">{message}</div>; }
export function EmptyState({ text }: { text: string }) { return <div className="empty">{text}</div>; }
export function PageHeader({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) { return <div className="page-header"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{description}</p></div>{action}</div>; }
export function BackLink({ href = "/", children = "Back" }: { href?: string; children?: ReactNode }) { return <Link className="back-link" href={href}>← {children}</Link>; }
