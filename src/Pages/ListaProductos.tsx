import { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import { ProductCard } from "../components/ProductCard";
import { getProductos } from "../handlers/handlers";
import toast from "react-hot-toast";

export function ListaProductos() {
  const [listaProductos, setListaProductos] = useState<Producto[]>([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const productos = getProductos();
        setListaProductos((await productos).data);
      }
      fetchData();
    } catch (error) {
      toast.error("Upss tuvimos problemas al cargar los ductos");
      console.error(error);
    }
  }, []);

  return (
    <PageTemplate title="Todos nuestros productos">
      <div className="p-32  max-sm:p-2 justify-center items-center pt-10 flex gap-6 flex-wrap">
        {listaProductos.map((product, index) => (
          <ProductCard
            key={index}
            description={product.descripcion}
            imageSource={product.imagenes[0]}
            price={product.precio}
            id={product.id}
            title={product.nombre}
          />
        ))}

        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\2.webp"
          price={20000}
          title="POLLERA "
          id={1}
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\1.webp"
          price={2999}
          title="POLLERA PANTALON"
          id={2}
        />
        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\3.webp"
          price={4000}
          title="Top Level"
          id={3}
        />

        <ProductCard
          description="2AADSF"
          imageSource="src\assets\fotos\5.webp"
          price={4000}
          title="Top Level"
          id={2}
        />
      </div>
    </PageTemplate>
  );
}
