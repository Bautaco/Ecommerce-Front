import axios from "axios";

const baseUrl = 'http://localhost:8080'

export const getProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/productos`)
        return response.data
    } catch (error) {
        throw new Error(`Error fetching products: ${error}`)
    }
}