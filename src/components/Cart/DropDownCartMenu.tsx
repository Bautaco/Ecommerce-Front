import {
  PropsWithChildren,
  ComponentProps,
  useState,
  useRef,
  useEffect,
} from "react";
import { useNavigate } from "react-router";
import useProductStore from "../../store/CartStore";
import useUserStore from "../../store/UserStore";
import CartItem from "./CartItem";
import { calculateTotal } from "./functions";
import toast from "react-hot-toast";
import { compra, ProductReq } from "../../handlers/handlers";

export default function DropDownCartMenu({
  children,
  ...props
}: PropsWithChildren & {} & ComponentProps<"button">) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { products, borrarCarrito } = useProductStore();
  const { usuario } = useUserStore();

  const total = calculateTotal();
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const navigate = useNavigate();

  async function handleCompra() {
    // Verifica si el usuario está autenticado
    if (!usuario?.usuario) {
      toast("Inicie sesión para realizar la compra.");
      navigate("/login");
      return;
    }

    if (!products || products.length === 0) {
      toast("No tienes productos en el carrito.");
      navigate("/ListaProductos");
      return;
    }

    // Construye la lista de productos requerida por la API
    const listaproductos: ProductReq[] = products.map((product) => ({
      id: product.id,
      nombre: product.title,
      precio: product.id,
    }));

    try {
      // Llama al endpoint de compra
      const response = await compra(usuario.id!, listaproductos);
      if (response.status === 200 || response.status === 201) {
        toast.success("Compra realizada con éxito.");
        borrarCarrito(); // Vacía el carrito
      } else {
        toast.error(
          "Hubo un problema al realizar la compra. Intenta nuevamente."
        );
      }
    } catch (error) {
      console.error("Error al realizar la compra:", error);
      toast.error(
        "No se pudo completar la compra. Verifica tu conexión o intenta más tarde."
      );
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
        className="inline-flex justify-center text-sm font-medium text-gray-700 shadow-sm w-auto"
      >
        {children}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-t-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div
            className="py-1 overflow-y-auto max-h-64" // Scroll con límite de altura
            role="none"
          >
            <h3 className="text-black font-semibold text-md p-4">
              {products ? "Tus productos" : "No hay Productos"}
            </h3>
            {products
              ? products.map((product) => (
                  <CartItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={"Product"}
                    price={product.price}
                    imageSource={product.images}
                    quantity={product.quantity}
                  />
                ))
              : null}
            <h3 className="text-black font-extrabold p-2">Total: ${total}</h3>
            <button
              className="bg-black hover:bg-hover hover:text-black w-full"
              onClick={handleCompra}
            >
              Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
