import type { ReactNode } from "react";
import Link from "next/link";

export function AppShell({ children }: { children: ReactNode }) {
  return <div className="app-shell"><a className="skip-link" href="#main-content">Skip to content</a><header className="topbar"><Link href="/" className="brand"><span className="brand-mark">T</span><span>TaskTrack</span></Link><nav className="nav-links" aria-label="Main navigation"><Link href="/">Overview</Link><Link href="/departments">Departments</Link><Link href="/projects">Projects</Link><Link href="/search">Search</Link><Link href="/tasks/manage" className="nav-cta">Manage workspace</Link></nav></header><main className="content" id="main-content">{children}</main><footer className="footer"><span>TaskTrack · PRN232</span><span>Public workspace</span></footer></div>;
}
