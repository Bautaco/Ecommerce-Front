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
    <PageTemplate title="Todos nuestros productos">
      <div className="p-32  max-sm:p-2 justify-center items-center pt-10 flex gap-6 flex-wrap">
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
          imageSource="src\assets\fotos\2.webp"
          price={20000}
          title="POLLERA "
          id="1"
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
          imageSource="src\assets\fotos\3.webp"
          price={4000}
          title="Top Level"
          id="3"
        />

        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\5.webp"
          price={4000}
          title="Top Level"
          id="4"
        />
      </div>
    </PageTemplate>
  );
}
