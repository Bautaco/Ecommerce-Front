import { ComponentProps } from "react";

export default function SVGButton({
  children,
  onClick,
}: ComponentProps<"button">) {
  return <button onClick={onClick}>{children}</button>;
}
