import Link from "next/link";
import Image from "next/image";

function ProductCard({ product }) {
    return (<div className="border my-4 w-96 shadow hover:shadow-xl">
        <Link href={`/products/${product.id}`}>
            <div className="h-64 w-96 relative">
                <Image
                    src={product.pictureUrl}
                    alt="Picture of a product"
                    fill={true}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="p-2 flex justify-between items-baseline">
                <h2 className="text-lg font-bold">
                    {product.title}
                </h2>
                <span>
                    $15.00
                </span>
            </div>
        </Link>
    </div >)
}

export default ProductCard;