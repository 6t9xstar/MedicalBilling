"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 text-center overflow-hidden"
      >
        <div
          className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/4 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/4 blur-[100px]"
          aria-hidden="true"
        />

        <m.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-lg"
        >
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-primary/10 to-accent/10"
          >
            <Search className="h-8 w-8 text-primary" />
          </m.div>
          <h1 className="font-heading text-8xl font-extrabold gradient-text">
            404
          </h1>
          <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="mt-2 font-body text-muted max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-accent hover:shadow-xl hover:shadow-accent/30 active:scale-[0.97]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </m.div>
      </main>
      <Footer />
    </div>
  );
}
