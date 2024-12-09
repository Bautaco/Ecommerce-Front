import React, {
  ComponentProps,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

export default function DropDownMenu({
  children,
  arrow,
  options,
  ...props
}: PropsWithChildren & {
  arrow?: boolean;
  options: any;
} & ComponentProps<"button">) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Cierra el menú si se hace clic fuera
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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        {...props}
        className="inline-flex  justify-center  text-sm font-medium text-gray-700 shadow-sm w-auto"
      >
        {children}
        {arrow && (
          <svg
            className={`ml-2 h-5 w-5 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#f3daf7] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {options.map()}
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
              role="menuitem"
            >
              Perfil
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
              role="menuitem"
            >
              Configuración
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
              role="menuitem"
            >
              Cerrar sesión
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
