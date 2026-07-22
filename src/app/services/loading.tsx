export default function ServicesLoadingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="h-32" />
      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="premium-panel animate-pulse rounded-2xl p-7">
              <div className="mb-4 h-14 w-14 rounded-2xl bg-primary/10" />
              <div className="h-6 w-3/4 rounded-lg bg-primary/10 mb-3" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded-lg bg-muted/20" />
                <div className="h-4 w-5/6 rounded-lg bg-muted/20" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
