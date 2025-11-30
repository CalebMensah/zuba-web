import Head from "next/head";

export async function getServerSideProps({ params }) {
  const { productUrl } = params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/product/${productUrl}`
    );

    if (!res.ok) {
      return { notFound: true };
    }

    const product = await res.json();
    console.log("Fetched product:", product);

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { notFound: true };
  }
}

export default function ProductPage({ product }) {
  const shareUrl = `https://zuba-web.vercel.app/product/${product.url}`;
  const imageUrl = product.images?.[0] || "";

  return (
    <>
      <Head>
        <title>{product.name} | Zuba</title>
        <meta name="description" content={product.description} />

        {/* OpenGraph + Social Preview */}
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="product" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main style={{ padding: 20 }}>
        <h1>{product.name}</h1>
        <img src={imageUrl} width="300" />
        <p>{product.description}</p>

        <a
          href={`zuba://product/${product.url}`}
          style={{ display: "block", marginTop: 20, fontSize: 20 }}
        >
          Open in App
        </a>

        <a
          href="/download"
          style={{ display: "block", marginTop: 10, color: "blue" }}
        >
          Download App
        </a>
      </main>
    </>
  );
}
