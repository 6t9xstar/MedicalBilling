export default function DotPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.03] ${className ?? ""}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(26,86,219,0.3) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    />
  );
}
