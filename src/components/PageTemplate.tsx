import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "../utils/utils";
import { ClassNameValue } from "tailwind-merge";

export default function PageTemplate({
  children,
  className,
  title,
  titleClassName,
  ...props
}: {
  title?: string;
  titleClassName?: ClassNameValue;
} & PropsWithChildren &
  ComponentProps<"main">) {
  return (
    <>
      <main {...props} className={cn(className, " bg-[#FAE2E2] min-h-screen ")}>
        <h1
          className={cn("text-black text-2xl font-bold p-10", titleClassName)}
        >
          {title}
        </h1>
        {children}
      </main>
    </>
  );
}
