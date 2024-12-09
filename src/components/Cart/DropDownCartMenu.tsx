import {
  ComponentProps,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import useProductStore from "../../store/CartStore";
import CartItem from "./CartItem";
import useUserStore from "../../store/UserStore";

export default function DropDownCartMenu({
  children,
  ...props
}: PropsWithChildren & {} & ComponentProps<"button">) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { products, borrarCarrito } = useProductStore();
  const { usuario } = useUserStore();

  const toggleMenu = () => setIsOpen((prev) => !prev); // Cierra el menú si se hace clic fuera
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const navigate = useNavigate();
  function handleCompra() {
    if (usuario.nombre !== "") {
      alert("Compra realizada con éxito!");
      borrarCarrito();
    } else {
      navigate("/login");
    }
  }

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
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#f3daf7] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1 " role="none">
            <h3 className="text-black font-semibold text-xl p-4">
              Tus Productos
            </h3>
            {products
              ? products.map((product) => {
                  return (
                    <CartItem
                      id={product.id}
                      title={product.title}
                      description={"Product"}
                      price={product.price}
                      imageSource={"src/assets/fotos/1.webp"}
                    />
                  );
                })
              : null}
            {/* <h3>Total : {calculateTotal()}</h3> */}
            <button
              className="bg-black w-full"
              onClick={() => {
                handleCompra();
              }}
            >
              Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
