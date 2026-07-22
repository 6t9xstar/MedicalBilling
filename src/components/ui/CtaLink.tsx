import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variantCls: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-accent hover:shadow-xl",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:text-accent",
};

export default function CtaLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={`${base} ${variantCls[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
