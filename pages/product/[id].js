import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/public/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error(err));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{product.name} | Zuba</title>
        <meta property="og:title" content={product.name} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/api/og/product/${product.id}`} />
        <meta property="og:description" content={`Buy ${product.name} for ₵${product.price} on Zuba`} />
      </Head>
      <div className="p-8">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p>₵{product.price}</p>
        <img src={product.images[0]} alt={product.name} />
      </div>
    </>
  );
}
