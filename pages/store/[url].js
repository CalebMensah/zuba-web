import Head from "next/head";

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stores/s/${params.url}`);
  console.log('store id from params:', params.url);
  console.log('Fetching store data from:', `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/public/store/${params.url}`);
  console.log('Response status:', res.status);
  console.log('Response ok:', res.ok);

  if (!res.ok) {
    return { notFound: true };
  }

  const store = await res.json();
  console.log('Fetched store data:', store);
  return { props: { store } };
}

export default function StorePage({ store }) {
  const ogImage = store.data.logo || `${process.env.NEXT_PUBLIC_SITE_URL}/default-og.png`;

  return (
    <>
      <Head>
        <title>{store.data.name}</title>
        <meta name="description" content={store.data.description || "Shop on Zuba"} />

        {/* Social share */}
        <meta property="og:title" content={store.data.name} />
        <meta property="og:description" content={store.data.description || "Shop on Zuba"} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}/store/${store.url}`} />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main style={{ padding: 20 }}>
        <h1>{store.data.name}</h1>
        <p>{store.data.description}</p>
        <img src={store.data.logo} alt="" width="120" />
        <p>This is the public store preview page.</p>
        <a href="/download" style={{ color: "blue" }}>Download App</a>
      </main>
    </>
  );
}
