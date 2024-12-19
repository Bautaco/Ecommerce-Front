import axios from "axios";

const baseUrl = "https://xh8p97s3-8080.brs.devtunnels.ms/";

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
    producto: listaProductos,
    cliente: clientId,
  });
  return response;
}

export type ProductReq = {
  id: number;
  nombre: string;
  precio: number;
};
