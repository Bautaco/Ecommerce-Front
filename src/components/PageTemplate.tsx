import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "../utils/utils";
import Header from "./Header/Header";
import Footer from "./Footer";
export default function PageTemplate({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(className, "flex flex-col min-h-screen min-w-[100vw]")}
    >
      <Header />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
}
