"use client";

import { useEffect } from "react";
import { PageHeader } from "@/components/ui";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <section className="panel"><PageHeader eyebrow="Something went wrong" title="This page could not load." description="The server may be temporarily unavailable. Try the request again." /><button className="button" onClick={reset}>Try again</button></section>;
}
