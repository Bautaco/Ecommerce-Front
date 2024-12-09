import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "../utils/utils";

export default function PageTemplate({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(className, "flex min-h-screen  bg-[#FAE2E2] relative")}
    >
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}
