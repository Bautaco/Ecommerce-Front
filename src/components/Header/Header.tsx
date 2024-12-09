import { ComponentProps } from "react";
import { cn } from "../../utils/utils";
import SVGButton from "./SVGButton";
import SVG_Search from "../../assets/SVG_Search";
import SVG_User from "../../assets/SGV_User";
import SVG_Cart from "../../assets/SVG_Cart";
import SVGTextLogo from "../../assets/TextLogo";
import { useNavigate } from "react-router";
import DropDownMenu, { Options } from "../DropDownMenu";
export default function Header({ className }: ComponentProps<"header">) {
  const navigate = useNavigate();

  const options: Options[] = [
    {
      title: "comprar",
      href: "/",
    },
    {
      title: "Borrar",
      href: "",
    },
  ];
  return (
    <header className={cn(className, "flex  justify-between p-2 h-10")}>
      <div className="flex items-center ">
        <SVGButton onClick={() => navigate("/")}>
          <SVGTextLogo width={150} />
        </SVGButton>
      </div>
      <nav className="flex gap-2 relative">
        <SVGButton>
          <SVG_Search width={15} height={15} />
        </SVGButton>
        <DropDownMenu children={<SVG_User width={15} height={15} />} />
        <DropDownMenu
          options={options}
          children={<SVG_Cart width={15} height={15} stroke="gray" />}
        />
      </nav>
    </header>
  );
}
