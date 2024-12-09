type Producto = {
    nombre: string;
    descripcion: string;
    precio: number;
    sku: string;
    stock: number;
    activo: boolean;
    umbralStockBajo: number;
    imagenes: string[];
    categoria: {
      id: number;
    };
    marca: {
      id: number;
    };
    subcategoria: {
      id: number;
    };
    variante: {
      id: number;
    };
  };