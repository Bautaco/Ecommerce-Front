import React from "react";
import { ProductCardType } from "../ProductCard";
import useProductStore from "../../store/CartStore";

export default function CartItem({
  description,
  id,
  imageSource,
  price,
  title,
}: ProductCardType) {
  const { addProduct, removeProduct } = useProductStore();

  return (
    <div className="text-black">
      <div className="flex">
        <img src={imageSource} className="w-20 aspect-square" alt="" />
        <div className="pl-4">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
      </div>
      <button
        onClick={() => {
          removeProduct(id);
        }}
      >
        Eliminar
      </button>
      <button
        onClick={() => {
          addProduct;
        }}
      >
        Agrgar
      </button>
    </div>
  );
}
