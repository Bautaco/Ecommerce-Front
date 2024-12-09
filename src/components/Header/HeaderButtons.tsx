import { ComponentProps } from "react";
import { cn } from "../../utils/utils";
import SVGTextLogo from "../../assets/TextLogo";

export default function HeaderButtons({
  className,
  title,
  routing,
  ...props
}: { title: string; routing: string } & ComponentProps<"button">) {
  return (
    <button {...props} className={cn(className, " p-2 rounded-lg	")}>
      <SVGTextLogo />
    </button>
  );
}
