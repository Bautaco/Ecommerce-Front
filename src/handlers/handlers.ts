import axios from "axios";

const baseUrl = 'http://localhost:8080'

const getProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/products`)
        return response.data
    } catch (error) {
        throw new Error(`Error fetching products: ${error}`)
    }
}
