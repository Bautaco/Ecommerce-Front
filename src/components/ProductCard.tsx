import useProductStore from "../store/CartStore";

export interface ProductCardType {
  id: number;
  title: string;
  description: string;
  price: number;
  imageSource: string;
  quantity?: number;
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
        <p className="px-2 text-center text-ellipsis ...">{description}</p>
        <p> {price} $</p>
        <button
          className="w-full p-4 hover:bg-[#f6bdff] hover:text-black"
          onClick={() => {
            console.log(id);
            addProduct({
              id: id,
              price: price,
              quantity: 1,
              title: title,
              images: imageSource,
            });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
