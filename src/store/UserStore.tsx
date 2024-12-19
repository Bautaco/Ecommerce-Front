import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Interfaz del producto

// Interfaz de la store
interface UsuarioStore {
  usuario: Usuario | null;
  setClient(client: Usuario): void;
  cleanToken(): void;
  //   setCart(cart: ProductCardType): void;
}

const useUserStore = create(
  persist<UsuarioStore>(
    (set) => ({
      usuario: {
        id: "",
        telefono: "",
        direccionEnvio: "",
        usuario: "",
        nombre: "",
        apellido: "",
        email: "",
        cart: [],
        password: "",
        role: "client",
        token: "",
      },

      setClient: (client: Usuario) =>
        set((state) => ({ ...state, usuario: client })),
      cleanToken: () => ({ usuario: null }),
    }),
    {
      name: "usuario-store", // Nombre de la clave en sessionStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
