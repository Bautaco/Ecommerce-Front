import React from "react";
import SVGTextLogo from "../assets/TextLogo";
import SVGLogo from "../assets/Logo";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();
  setTimeout(() => navigate("/"), 3000);
  return (
    <div className="w-screen h-screen bg-[#f3daf7] flex justify-center flex-col items-center">
      <h1 className="text-4xl text-center text-red-500">
        Ups ah habido un Error....
      </h1>
      <div className=" flex flex-col items-center">
        <SVGLogo />
        <SVGTextLogo />
      </div>
      <p className="text-center text-black">
        Parece que has encontrado un error en la página. Serás redirigido a la
        página principal.
      </p>
    </div>
  );
}
