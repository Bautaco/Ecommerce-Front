import axios from "axios";

const baseUrl = 'http://localhost:8080'

export const getProducts = async () => {

        const response = await axios.get<Producto[]>(`${baseUrl}/api/productos`)
        return response.data
    
}