import React, { ComponentProps } from "react";

export default function SVGButton({ children }: ComponentProps<"button">) {
  return <button>{children}</button>;
}
