import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Interfaz del producto

// Interfaz de la store
interface UsuarioStore {
  usuario: Usuario;
  setClient(client: Usuario): void;
  //   setCart(cart: ProductCardType): void;
}

const useUserStore = create(
  persist<UsuarioStore>(
    (set) => ({
      usuario: {
        nombre: "",
        apellido: "",
        email: "",
        cart: [],
        password: "",
        role: "client",
      },
      //   setCart: (cart: ProductCardType) => {
      //     set((state) => ({ ...state, usuario: {cart:cart} })),
      //   },
      setClient: (client: Usuario) =>
        set((state) => ({ ...state, usuario: client })),
    }),
    {
      name: "usuario-store", // Nombre de la clave en sessionStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
