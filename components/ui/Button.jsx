import { cn } from "@/lib/cn";

export default function Button({ children, className }) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-full bg-secondary text-white font-semibold transition hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      {children}
    </button>
  );
}
