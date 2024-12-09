import React from "react";
import useProductStore from "../store/CartStore";

export interface ProductCardType {
  id: string;
  title: string;
  description: string;
  price: number;
  imageSource: string;
}
export function ProductCard({
  description,
  id,
  price,
  title,
  imageSource,
}: ProductCardType) {
  const { addProduct } = useProductStore();
  return (
    <div className="w-52  flex flex-col">
      <img src={imageSource} className=" h-fit bg-cover" alt="product" />
      <div className="flex flex-col justify-center items-center bg-black">
        <h3>{title}</h3>
        <p>{description}</p>
        <p> {price} $</p>
        <button
          className="w-full p-4 hover:bg-[#f6bdff] hover:text-black"
          onClick={() => {
            addProduct({ id: id, price: price, quantity: 1, title: title });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
