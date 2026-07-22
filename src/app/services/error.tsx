"use client";

import { useEffect } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ServicesErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
        <m.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-border/70 bg-white/85 p-10 shadow-2xl shadow-primary/10 backdrop-blur-xl"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Unable to load services</h1>
          <p className="font-body text-muted max-w-md mb-6">
            We could not retrieve our services. Please try again.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-accent active:scale-[0.97]"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted/10 active:scale-[0.97]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        </m.div>
      </main>
      <Footer />
    </div>
  );
}
