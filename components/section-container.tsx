import { cn } from "@/lib/utils";

export const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("mx-auto py-4 lg:py-10 px-4 max-w-[1110px]", className)}>
      {children}
    </section>
  );
};
