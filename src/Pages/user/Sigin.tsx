import React, { useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import useUserStore from "../../store/UserStore";

export function Sigin() {
  const { setClient } = useUserStore();

  // Estado para manejar los valores del formulario
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setClient(formValues);

    console.log("Datos enviados:", formValues);
  };

  return (
    <PageTemplate className="w-screen">
      <div className="flex m-10  flex flex-col items-center">
        <h1 className="text-2xl text-black">Crear Cuenta</h1>
        <form onSubmit={handleSubmit} className="mt-10">
          <div>
            <input
              type="text"
              name="nombres"
              placeholder="Nombres"
              value={formValues.nombre}
              onChange={handleChange}
              className="mt-1 p-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
            />
          </div>
          <div className="mt-7">
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formValues.apellido}
              onChange={handleChange}
              className="mt-1 p-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
            />
          </div>
          <div className="mt-7">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formValues.email}
              onChange={handleChange}
              className="mt-1 p-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
            />
          </div>
          <div className="mt-7">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formValues.password}
              onChange={handleChange}
              className="mt-1 block p-4 w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
            />
          </div>
          <div className="mt-7">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formValues.confirmPassword}
              onChange={handleChange}
              className="mt-1 block p-4 w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full p-4 bg-black text-white hover:bg-gray-800 rounded-xl py-3 px-10"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}
