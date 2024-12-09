import { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import { ProductCard, ProductCardType } from "../components/ProductCard";
import { getProducts } from "../handlers/handlers";

export function ListaProductos() {
  const [listaProductos, setListaProductos] = useState<Producto[]>([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const productos = await getProducts();
        setListaProductos(productos);
      }
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [listaProductos]);

  return (
    <PageTemplate className="w-screen">
      <h1 className="text-black text-2xl font-bold p-10">
        Todos nuestros productos
      </h1>

      <div className="p-32 pt-10 flex gap-6 flex-wrap">
        {listaProductos.map((product) => (
          <ProductCard
            key={product.sku}
            description={product.descripcion}
            imageSource={product.imagenes[0]}
            price={product.precio}
            id={product.sku}
            title={product.nombre}
          />
        ))}

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
