import { fetchProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useEffect } from "react";
import axios from "axios";
import Page from "@/components/Page";

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps()");
  const products = await fetchProducts()
  return {
    props: {
      products
    }, revalidate: parseInt(process.env.REVALIDATE_SECONDS)
  }
}

function HomePage({ products }) {
  useEffect(() => {
    const data = {
      identifier: 'alice@example.com',
      password: '123456'
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const url = 'http://96.126.96.164:1337/api/auth/local';
    axios.post(url, data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  console.log("[HomePage] rendered", products);
  return (
    <Page title="Indoor Plants">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default HomePage;
