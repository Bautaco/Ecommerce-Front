import { ComponentProps } from "react";
import { cn } from "../../utils/utils";
import SVGButton from "./SVGButton";
import SVG_Search from "../../assets/SVG_Search";
import SVG_User from "../../assets/SGV_User";
import SVG_Cart from "../../assets/SVG_Cart";
import SVGTextLogo from "../../assets/TextLogo";
import DropDownMenu from "../DropdownMenu";
export default function Header({ className }: ComponentProps<"header">) {
  return (
    <header className={cn(className, "flex  justify-between p-2 h-10")}>
      <div className="flex items-center ">
        <SVGTextLogo width={150} onMouseEnter={() => console.log("hello")} />
      </div>
      <nav className="flex gap-2 relative">
        <SVGButton>
          <SVG_Search width={15} height={15} />
        </SVGButton>
        <SVGButton>
          <SVG_User width={15} height={15} />
        </SVGButton>
        <SVGButton>
          <SVG_Cart width={15} height={15} stroke="gray" />
        </SVGButton>
        <DropDownMenu
          options={2}
          children={<SVG_Cart width={15} height={15} stroke="gray" />}
        />
      </nav>
    </header>
  );
}
