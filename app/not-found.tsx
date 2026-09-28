import Link from "next/link";
import { PageHeader } from "@/components/ui";

export default function NotFound() {
  return <section className="panel"><PageHeader eyebrow="404" title="Nothing lives here." description="The page may have moved, or the record no longer exists." /><Link className="button" href="/">Return to overview</Link></section>;
}
