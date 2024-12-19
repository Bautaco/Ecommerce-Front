import React, { ComponentProps } from "react";

export function Input({ ...props }: ComponentProps<"input">) {
  return (
    <input
      {...props}
      className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg  focus:ring-0"
    />
  );
}
