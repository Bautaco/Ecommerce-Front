import useProductStore from "../../store/CartStore";

const { products } = useProductStore();
export const calculateTotal = (): number => {
    const products = useProductStore.getState().products;
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };
  
