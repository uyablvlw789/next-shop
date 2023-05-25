import Head from "next/head"
import Title from "@/components/Title"
import { fetchProduct, fetchProducts } from "@/lib/products"
import { ApiError } from "@/lib/api";
import Image from "next/image"


export async function getStaticPaths() {
    const products = await fetchProducts();
    return {
        paths: products.map((product) => {
            return { params: { id: product.id.toString() } }
        }), fallback: 'blocking'
    }
}

export async function getStaticProps({ params: { id } }) {
    try {
        const product = await fetchProduct(id)
        return {
            props: {
                product
            }, revalidate: parseInt(process.env.REVALIDATE_SECONDS)
        }
    } catch (err) {
        if (err instanceof ApiError && err.status === 404) {
            return { notFound: true }
        }
        throw err;
    }
}

export default function ProductPage({ product }) {
    return (<>
        <Head>
            <title>Product</title>
        </Head>
        <main className="px-6 py-4">
            <Title>{product.title}</Title>
            <div className="flex flex-col lg:flex-row">
                {/* Show image (640 x 480) */}
                <div>
                    <Image
                        src={product.pictureUrl}
                        alt="product picture"
                        width={640}
                        height={480}
                    />
                </div>
                <p className="flex-1 lg:ml-4">
                    {product.description}
                </p>
                <p className="text-lg font-bold mt-2 lg:mt-0">
                    {product.price}
                </p>

            </div>
        </main>
    </>
    )
}