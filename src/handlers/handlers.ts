import axios from "axios";

const baseUrl = 'https://xh8p97s3-8080.brs.devtunnels.ms/'

export const getProducts = async () => {

        const response =  axios.get<Producto[]>(`${baseUrl}/api/productos`)
        return response
    
}
export function getProductos(){
        const response =  axios.get(`${baseUrl}api/productos`)
        return response
}
