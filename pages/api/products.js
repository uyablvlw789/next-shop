import { fetchProducts } from "@/lib/products";

async function handler(req, res) {
    console.log('[/api/products] handler');
    const products = await fetchProducts();
    res.status(200).json(products);
}

export default handler