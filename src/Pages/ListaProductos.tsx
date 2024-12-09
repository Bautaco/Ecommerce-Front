import PageTemplate from "../components/PageTemplate";
import { ProductCard, ProductCardType } from "../components/ProductCard";
import { getProducts } from "../handlers/handlers";

export function ListaProductos() {
  const listaProductos=getProducts();
  console.log(listaProductos)
  return (
    <PageTemplate className="w-screen">
      <h1 className="text-black text-2xl font-bold p-10">
        Todos nuestros productos
      </h1>
      <div className="p-32 pt-10 flex gap-6 flex-wrap">
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id="2"
        />
      </div>
    </PageTemplate>
  );
}
