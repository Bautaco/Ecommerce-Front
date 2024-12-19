import PageTemplate from "../../components/PageTemplate";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { getUser, login } from "../../handlers/handlers";
import useUserStore from "../../store/UserStore";

type LoginFormValues = {
  username: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const { setClient } = useUserStore();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const req = await login(data.username, data.password);
      const user = await getUser(data.username);

      toast.success("Login successful  " + user.data.lastname);

      // Guardar el usuario en el store
      setClient({
        id: req.data.id,
        apellido: user.data.lastname,
        usuario: data.username,
        nombre: user.data.firstname,
        email: user.data.email,
        password: "",
        direccionEnvio: user.data.direccionEnvio,
        telefono: user.data.telefono,
        token: req.data.token,
      });
      navigate("/");
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <PageTemplate title="Login" titleClassName="text-center">
      <div className="   flex flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 w-full max-w-sm"
        >
          <div>
            <input
              type="text"
              {...register("username", {
                required: "El usuario es obligatorio",
              })}
              placeholder="Correo electrónico"
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg  focus:ring-0"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div className="mt-7">
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "El usuario es obligatorio",
              })}
              className="mt-1 p-4 block w-full border-none bg-gray-800 h-11 shadow-lg  focus:ring-0"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            )}
          </div>

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
