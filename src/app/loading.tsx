export default function LoadingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/6 blur-[100px]" />
      <div className="relative flex flex-col items-center gap-5 rounded-3xl border border-border/60 bg-white/80 px-10 py-9 shadow-2xl shadow-primary/10 backdrop-blur-xl">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-primary/15" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary" />
          <div className="absolute inset-3 animate-breathe rounded-full bg-linear-to-br from-primary/15 to-accent/15" />
        </div>
        <p className="font-body text-sm font-medium text-muted animate-pulse">
          Preparing a secure experience...
        </p>
      </div>
    </main>
  );
}
