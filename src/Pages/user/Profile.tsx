import React from "react";
import PageTemplate from "../../components/PageTemplate";
import useUserStore from "../../store/UserStore";
import { useNavigate } from "react-router";

export function Profile() {
  const { usuario, cleanToken } = useUserStore();
  const navigate = useNavigate();
  function handleClick() {
    cleanToken();
    navigate("/");
    localStorage.removeItem("usuario-store");
  }

  return (
    <PageTemplate title="Bienvenido">
      <div className="p-4 text-black flex  flex-col items-center gap-4">
        <h2 className="text-2xl">Estás en tu profile</h2>
        <div className="mt-1 p-4 text-white w-full border-none bg-gray-800 h-80 shadow-lg  focus:ring-0 flex gap-6 flex-col">
          <p className="font-bold ">Nombre: {usuario?.nombre}</p>
          <p className="font-bold ">Apellido: {usuario?.apellido}</p>
          <p className="font-bold ">Telefono: {usuario?.telefono}</p>
          <p className="font-bold ">Email: {usuario?.email}</p>
        </div>
        <button
          className="w-full p-4 bg-black text-white hover:bg-gray-800 rounded-xl py-3 px-10"
          onClick={() => {
            handleClick();
          }}
        >
          Salir
        </button>
      </div>
    </PageTemplate>
  );
}
