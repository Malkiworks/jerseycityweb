"use client";

import { useEffect } from "react";

export default function PortfolioRedirectPage() {
  useEffect(() => {
    window.location.replace("/#services");
  }, []);
  return (
    <p className="mx-auto max-w-6xl px-4 py-24 text-center text-sm font-light text-muted">
      Redirecting…
    </p>
  );
}
