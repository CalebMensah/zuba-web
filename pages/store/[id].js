import Head from "next/head";

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stores/${params.id}`);
  console.log('store id from params:', params.id);
  console.log('Fetching store data from:', `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/public/store/${params.id}`);
  console.log('Response status:', res.status);
  console.log('Response ok:', res.ok);

  if (!res.ok) {
    return { notFound: true };
  }

  const store = await res.json();
  return { props: { store } };
}

export default function StorePage({ store }) {
  const ogImage = store.logo || `${process.env.NEXT_PUBLIC_SITE_URL}/default-og.png`;

  return (
    <>
      <Head>
        <title>{store.name}</title>
        <meta name="description" content={store.description || "Shop on Zuba"} />

        {/* Social share */}
        <meta property="og:title" content={store.name} />
        <meta property="og:description" content={store.description || "Shop on Zuba"} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}/store/${store.url}`} />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main style={{ padding: 20 }}>
        <h1>{store.name}</h1>
        <p>{store.description}</p>
        <img src={store.logo} alt="" width="120" />
        <p>This is the public store preview page.</p>
        <a href="/download" style={{ color: "blue" }}>Download App</a>
      </main>
    </>
  );
}
