import React from "react";
import SVGTextLogo from "../assets/TextLogo";
import SVGLogo from "../assets/Logo";

export default function ErrorPage() {
  return (
    <div className="w-full h-full bg-[#f3daf7]">
      <h1 className="text-4xl text-center text-red-500">Error</h1>
      <div>
        <SVGLogo />
        <SVGTextLogo />
      </div>
      <p className="text-center">
        Parece que has caído en un error en la página.
      </p>
    </div>
  );
}
