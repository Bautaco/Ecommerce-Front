type Producto = {
  id: number;
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

type Usuario = {
  id?: string;
  usuario: string;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  direccionEnvio: string;
  telefono: string;
  role?: string;
  cart?: Producto[];
  token?: string;
};
