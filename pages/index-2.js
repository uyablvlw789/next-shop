// Option 2 Fetch products on the client side (in get useEffect hook)
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
