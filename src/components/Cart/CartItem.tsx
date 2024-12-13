import React from "react";
import { ProductCardType } from "../ProductCard";
import useProductStore from "../../store/CartStore";

export default function CartItem({
  description,
  id,
  imageSource,
  price,
  title,
  quantity,
}: ProductCardType) {
  const { addProduct, decrementQuantity } = useProductStore();

  return (
    <div className="text-black bg-white p-2 my-1">
      <div className="flex">
        <img src={imageSource} className="w-20 aspect-square" alt="" />
        <div className="pl-4">
          <h3>{title}</h3>
          <p>{price}$</p>x {quantity}
        </div>
      </div>
      <div className="flex justify-evenly gap-2">
        <button
          className="border-[2px] border-black w-full active:bg[#f3daf7]"
          onClick={() => {
            decrementQuantity(id);
          }}
        >
          Quitar
        </button>
        <button
          onClick={() => {
            addProduct({
              id: id,
              price: price,
              title: imageSource,
              quantity: 1,
              images: imageSource,
            });
          }}
          className="border-2 w-full active:bg[#f3daf7]"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
