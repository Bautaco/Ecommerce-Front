import React, { useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import useUserStore from "../../store/UserStore";

export function Login() {
  const { usuario } = useUserStore();
  const storedUser = usuario;

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (storedUser.email !== "" || storedUser.password !== "") {
      if (
        storedUser?.email === credentials.email &&
        storedUser?.password === credentials.password
      ) {
        alert("Inicio de sesión exitoso");
      } else {
        setError("Correo electrónico o contraseña incorrectos");
      }
    }
  };

  return (
    <PageTemplate className="w-screen">
      <div className="flex m-10  flex flex-col items-center">
        <h1 className="text-2xl text-black">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-sm">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={credentials.email}
              onChange={handleChange}
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 rounded-xl shadow-lg  focus:ring-0"
            />
          </div>
          <div className="mt-7">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={credentials.password}
              onChange={handleChange}
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 rounded-xl shadow-lg  focus:ring-0"
            />
          </div>
          {error && <p className="mt-3 text-red-500">{error}</p>}
          <div className="mt-7">
            <button
              type="submit"
              className="w-full p-4 bg-black text-white hover:bg-gray-800 rounded-xl py-3 px-10"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}
