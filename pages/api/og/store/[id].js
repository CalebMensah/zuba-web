import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { id } = req.query;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stores/${id}`);
  if (!res.ok) return new Response('Store not found', { status: 404 });
  const store = await res.json();
  console.log('store details:', store)

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 50,
      }}
    >
      <img
        src={store.logo}
        width={180}
        height={180}
        style={{ borderRadius: '50%', marginBottom: 40 }}
      />
      {store.name}
    </div>,
    { width: 1200, height: 630 }
  );
}
