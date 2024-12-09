import { ComponentProps } from "react";

export default function SVGButton({
  children,
  className,
  onClick,
}: ComponentProps<"button">) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
