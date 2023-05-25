import axios from "axios";
import { fetchJSON } from "./api";

const { CMS_API_URL } = process.env;
const { CMS_URL } = process.env


export async function fetchProduct(id) {
    const response = await fetchJSON(`${CMS_API_URL}/products/${id}?populate=*`)

    const { data: product } = await response;

    return stripProduct(product)
}

export async function fetchProducts() {
    const { data: { data: products } } = await axios.get(`${CMS_API_URL}/products`, {
        params: {
            "populate": "*"
        }
    })

    return products.map(stripProduct)
}

const stripProduct = (product) => {
    return {
        id: product.id,
        title: product.attributes.title,
        description: product.attributes.description,
        price: '$' + product.attributes.price.toFixed(2),
        pictureUrl: `${CMS_URL}${product.attributes.picture.data.attributes.url}`
    }
}