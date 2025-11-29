import './globals.css'

export const metadata = {
  title: 'Zuba - Buy. Sell. Trust',
  description: "Ghana's trusted social commerce platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}