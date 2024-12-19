import { ComponentProps } from "react";
import { cn } from "../../utils/utils";
import SVGButton from "./SVGButton";
import SVG_Search from "../../assets/SVG_Search";
import SVG_User from "../../assets/SGV_User";
import SVG_Cart from "../../assets/SVG_Cart";
import SVGTextLogo from "../../assets/TextLogo";
import { useNavigate } from "react-router";
import DropDownMenu, { Options } from "../DropDownMenu";
import DropDownCartMenu from "../Cart/DropDownCartMenu";
import useUserStore from "../../store/UserStore";
export default function Header({ className }: ComponentProps<"header">) {
  const navigate = useNavigate();
  const { usuario, cleanToken } = useUserStore();

  const options: Options[] = [
    {
      title: "Ingresar...",
      href: "/login",
    },
    {
      title: "CrearCuenta...",
      href: "/sigin",
    },
  ];
  const optionsLogout: Options[] = [
    {
      title: "Mi Perfil",
      href: "/MiPerfil",
    },
    {
      title: "Salir",
      href: "/",
    },
  ];
  function handleLogin(): boolean {
    if (usuario!.email !== "") {
      return false;
    }
    return true;
  }
  return (
    <header className={cn(className, "flex  justify-between p-2 h-10")}>
      <div className="flex items-center ">
        <SVGButton onClick={() => navigate("/")}>
          <SVGTextLogo width={150} />
        </SVGButton>
      </div>
      <nav className="flex gap-2 relative">
        {/* <SVGButton
          className="hover:bg-[#f6bdff] h-full rounded-md"
          onClick={() => {
            navigate("/ListaProductos");
          }}
        >
          <p className=" hover:text-black px-2 font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Lista de productos
          </p>
        </SVGButton> */}
        {/* <SVGButton>
          <SVG_Search width={15} height={15} />
        </SVGButton> */}

        <DropDownMenu
          children={<SVG_User width={15} height={15} />}
          options={handleLogin() ? options : optionsLogout}
        />
        <DropDownCartMenu
          children={<SVG_Cart width={15} height={15} stroke="gray"></SVG_Cart>}
        />
      </nav>
    </header>
  );
}
