"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProcessPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/projects");
  }, [router]);

  return (
    <div style={{ minHeight: "50vh", display: "grid", placeItems: "center", padding: "60px 20px" }}>
      <p style={{ fontFamily: "var(--font-mono, monospace)", color: "var(--slate)" }}>
        Redirecting to projects...
      </p>
    </div>
  );
}
