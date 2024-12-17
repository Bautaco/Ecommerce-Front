import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { cn } from "../../utils/utils";
import { motion } from "motion/react";

export function SideBar({
  open,
  setIsOpen,
  children,
  show,
}: {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  show?: boolean; // Para animar la aparición y desaparición del sidebar
} & PropsWithChildren) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <motion.div
      className={cn(
        "fixed z-40 bg-pink h-52 mt-24 overflow-hidden text-black shadow-lg",
        {
          hidden: show,
        }
      )}
      ref={dropdownRef}
      style={{ width: open ? "24rem " : "1rem" }}
      animate={{ width: open ? "20rem" : "1rem" }}
      transition={{ duration: 0.3, easing: "ease-in-out" }}
    >
      <button
        className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 border-2 bg-hover text-black w-8 h-8 rounded-2xl z-50"
        onClick={() => {
          setIsOpen(!open);
        }}
      >
        ::::
      </button>
      <div
        className={cn("bg-hover border-b-2", { hidden: !open })}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
