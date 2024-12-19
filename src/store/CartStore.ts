import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Interfaz del producto
interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  images: string;
}

// Interfaz de la store
interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  removeProduct: (id: string) => void;
  borrarCarrito: () =>void;
  client?: string 

}

const useProductStore = create(
  persist<ProductStore>(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => {
          const existingProduct = state.products.find((p) => p.id === product.id);
          if (existingProduct) {
            return {
              products: state.products.map((p) =>
                p.id === product.id
                  ? { ...p, quantity: p.quantity + product.quantity }
                  : p
              ),
            };
          }
       
          return{ products: [...state.products, product] };
        }),
      incrementQuantity: (id) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        })),
      decrementQuantity: (id) =>
        set((state) => ({
          products: state.products
            .map((p) =>
              p.id === id ? { ...p, quantity: Math.max(p.quantity - 1, 0) } : p
            )
            .filter((p) => p.quantity > 0), 
        })),
      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
        borrarCarrito: () =>
          set(() => ({
            products:[]
          })),
    }),
    {
      name: 'product-store', // Nombre de la clave en sessionStorage
      storage: createJSONStorage(() => localStorage),

    }
  )
);

export default useProductStore;