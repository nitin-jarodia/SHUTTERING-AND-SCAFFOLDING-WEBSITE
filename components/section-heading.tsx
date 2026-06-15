import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        light ? "text-white" : "text-slate-950"
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-black uppercase tracking-[0.28em]",
            light ? "text-amber-300" : "text-amber-600"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 sm:text-lg",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
