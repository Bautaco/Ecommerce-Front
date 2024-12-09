import { ComponentProps, Dispatch, SetStateAction, useEffect } from "react";
import { cn } from "../../utils/utils";
import { animate } from "motion/react";
import { useNavigate } from "react-router-dom";
import SVG_Menu from "../../assets/SVG_Menu";
import { routes, setStateFalse } from "../../router/routes";

function Sidebar({
  isOpen,
  setIsOpened,
  className,
}: {
  isOpen: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
} & ComponentProps<"div">) {
  const navigation = useNavigate();
  useEffect(() => {
    if (isOpen) {
      animate("#sidebar", { width: "20rem" }, { ease: "easeIn" });
      animate("nav", { opacity: 1 }, { ease: "easeIn" });
    } else {
      animate("#sidebar", { width: "2.5rem" }, { ease: "easeOut" });
      animate("nav", { opacity: 0 }, { ease: "easeOut" });
    }
  }, [isOpen]);

  function handleOpened() {
    setIsOpened(!isOpen);
  }

  return (
    <div
      id="sidebar"
      className={cn(
        className,
        isOpen ? "w-80 " : "w-10 ",
        " bg-[#111418] p-4 flex flex-col justify-between "
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={() => {
              handleOpened();
            }}
          >
            <SVG_Menu width={15} height={15} />
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {routes.map((item, idx) => (
            <button
              key={idx}
              className={cn(
                "px-3 py-2 text-left rounded-xl",
                "hover:bg-[#293038]",
                item.active ? "bg-[#293038]" : ""
              )}
              onClick={() => {
                setStateFalse();
                item.active = true;
                navigation(item.route);
              }}
            >
              <p className="text-sm font-medium">{item.label}</p>
            </button>
          ))}
        </nav>
      </div>
      <div className={cn("flex flex-col gap-1", isOpen ? "" : "hidden")}>
        {["Profile", "Settings", "Help & Feedback"].map((item, idx) => (
          <div key={idx} className="px-3 py-2">
            <p className="text-sm font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
