export default function ServiceDetailLoadingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative overflow-hidden gradient-bg pt-20 pb-10 md:pt-24 md:pb-12">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/8 blur-[100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative animate-pulse space-y-4">
            <div className="h-4 w-24 rounded bg-white/20" />
            <div className="h-12 w-3/4 rounded-lg bg-white/20" />
            <div className="h-4 w-1/2 rounded bg-white/20" />
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3 space-y-4 animate-pulse">
            <div className="h-8 w-48 rounded-lg bg-muted/20" />
            <div className="h-4 w-24 rounded bg-muted/20" />
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-16 w-full rounded-xl border border-border bg-white/70 shadow-sm"
              />
            ))}
          </div>
          <div className="lg:col-span-2 space-y-6 animate-pulse">
            <div className="h-96 rounded-2xl border border-border bg-white/70 shadow-sm" />
            <div className="h-48 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
