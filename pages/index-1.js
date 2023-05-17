// Option 1: fetch products on the server side
import Head from "next/head";
import Title from "../components/Title";

const products = [
  {
    id: 1,
    title: "first product",
  },
  {
    id: 2,
    title: "Second product",
  },
];

export async function getStaticProps() {
  console.log("HomePage getStaticProps");
  const response = await fetch("http://170.64.158.149:1338/api/products");
  const products = await response.json();
  return {
    props: products,
  };
}

function HomePage() {
  console.log("[HomePage] rendered", products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
