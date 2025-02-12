import axios from "axios";

const baseUrl2 = "http://localhost:8080/";
const baseUrl = "https://8s6ggzdl-8080.brs.devtunnels.ms/";
export const getProducts = async () => {
  const response = axios.get<Producto[]>(`${baseUrl}/api/productos`);
  return response;
};
export function getProductos() {
  const response = axios.get(`${baseUrl}api/productos`);
  return response;
}
export function login(username: string, password: string) {
  const response = axios.post(`${baseUrl}auth/login`, { username, password });
  return response;
}
export function getUser(username: string) {
  const response = axios.get(`${baseUrl}api/user/profile?username=${username}`);
  return response;
}
export function sigin(
  username: string,
  password: string,
  email: string,
  lastname: string,
  firstname: string,
  direccionEnvio: string,
  telefono: string
) {
  const response = axios.post(`${baseUrl}auth/register`, {
    username,
    password,
    email,
    lastname,
    firstname,
    direccionEnvio,
    telefono,
  });
  return response;
}
export function compra(clientId: string, listaProductos: ProductReq[]) {
  const response = axios.post(`${baseUrl}api/pedidos`, {
    clienteId: clientId,
    productos: listaProductos,
  });
  return response;
}

export type ProductReq = {
  productoId: number;
  nombre?: string;
  precio?: number;
  cantidad: number;
};
