import PageTemplate from "../../components/PageTemplate";
import useUserStore from "../../store/UserStore";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { sigin } from "../../handlers/handlers";
import { useNavigate } from "react-router";

export type UsuarioType = {
  usuario: string;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  direccionEnvio: string;
  telefono: string;
  confirmarpassword: string;
  token?: string | undefined;
};

export function Sigin() {
  const { setClient } = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsuarioType>();

  const onSubmit = async (data: UsuarioType) => {
    if (data.password !== data.confirmarpassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    try {
      await sigin(
        data.usuario,
        data.password,
        data.email,
        data.apellido,
        data.nombre,
        data.direccionEnvio,
        data.telefono
      );

      // setClient({
      //   usuario: data.usuario,
      //   nombre: data.nombre,
      //   apellido: data.apellido,
      //   email: data.email,
      //   password: data.password,
      //   direccionEnvio: data.direccionEnvio,
      //   telefono: data.telefono,
      //   token: req.data.token ?? "token",
      // });
      toast.success("Cuenta creada con éxito");
      navigate("/login");
      console.log("Datos enviados:", data);
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <PageTemplate className="w-screen">
      <div className="flex m-10 flex-col items-center">
        <h1 className="text-2xl text-black">Crear Cuenta</h1>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              {...register("usuario", {
                required: "El usuario es obligatorio",
              })}
              placeholder="Usuario"
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg focus:ring-0"
            />
            {errors.usuario && (
              <p className="text-red-500 text-sm">{errors.usuario.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("nombre", { required: "El nombre es obligatorio" })}
              placeholder="Nombres"
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg focus:ring-0"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre.message}</p>
            )}
          </div>
          <div className="mt-7">
            <input
              type="text"
              {...register("apellido", {
                required: "El apellido es obligatorio",
              })}
              placeholder="Apellido"
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg focus:ring-0"
            />
            {errors.apellido && (
              <p className="text-red-500 text-sm">{errors.apellido.message}</p>
            )}
          </div>
          <div className="mt-7">
            <input
              type="email"
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "El correo electrónico no es válido",
                },
              })}
              placeholder="Correo electrónico"
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg focus:ring-0"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mt-7">
            <input
              type="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
              placeholder="Contraseña"
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg focus:ring-0"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="mt-7">
            <input
              type="password"
              {...register("confirmarpassword", {
                required: "Debes confirmar tu contraseña",
              })}
              placeholder="Confirmar contraseña"
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg focus:ring-0"
            />
            {errors.confirmarpassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmarpassword.message}
              </p>
            )}
          </div>
          <div className="mt-7">
            <input
              type="text"
              {...register("telefono", {
                required: "El teléfono es obligatorio",
              })}
              placeholder="Teléfono"
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg focus:ring-0"
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm">{errors.telefono.message}</p>
            )}
          </div>
          <div className="mt-7">
            <input
              type="text"
              {...register("direccionEnvio", {
                required: "La dirección de envío es obligatoria",
              })}
              placeholder="Dirección de envío"
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg focus:ring-0"
            />
            {errors.direccionEnvio && (
              <p className="text-red-500 text-sm">
                {errors.direccionEnvio.message}
              </p>
            )}
          </div>
          <div className="mt-7">
            <input
              type="submit"
              className="w-full p-4 bg-black text-white hover:bg-gray-800 rounded-xl py-3 px-10"
            />
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}
