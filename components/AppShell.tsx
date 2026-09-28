"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["/", "Overview"], ["/departments", "Departments"], ["/projects", "Projects"], ["/search", "Search"]] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <div className="app-shell"><a className="skip-link" href="#main-content">Skip to content</a><header className="topbar"><Link href="/" className="brand"><span className="brand-mark">T<span /></span><span>TaskTrack<small>workspace</small></span></Link><nav className="nav-links" aria-label="Main navigation">{links.map(([href, label]) => <Link href={href} className={href === "/" ? pathname === "/" ? "active" : "" : pathname.startsWith(href) ? "active" : ""} key={href}>{label}</Link>)}<Link href="/tasks/manage" className={`nav-cta${pathname.includes("/manage") ? " active" : ""}`}>Manage <span aria-hidden="true">↗</span></Link></nav></header><main className="content" id="main-content">{children}</main><footer className="footer"><span><strong>TaskTrack</strong> · PRN232</span><span>Built for focused teams · Public workspace</span></footer></div>;
}
