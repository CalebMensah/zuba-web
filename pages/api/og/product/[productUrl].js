import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
const { productUrl } = req.query;

const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${productUrl}`);

if (!res.ok) {
  return new Response('Product not found', { status: 404 });
}

const product = await res.json();
console.log('Seller product details:', product);


  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 50,
      }}
    >
      <img
        src={product.images[0]}
        width={200}
        height={200}
        style={{ borderRadius: '20px', marginBottom: 40 }}
      />
      {product.name}
      <div style={{ fontSize: 40, marginTop: 20 }}>₵{product.price}</div>
    </div>,
    { width: 1200, height: 630 }
  );
}
