import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doğukan Böltül | E-Ticaret Operasyon ve Sistem Mimarı',
  description: 'E-ticaret operasyonlarında sürdürülebilirlik, lojistik yönetimi ve SaaS çözümleri. İşletmenizi dijitalde operasyonel mükemmelliğe taşıyın.',
  keywords: ['e-ticaret danışmanı', 'operasyon yönetimi', 'sistem mimarı', 'Cekapp', 'B2B e-ticaret', 'toptan e-ticaret'],
  authors: [{ name: 'Doğukan Böltül' }],
  metadataBase: new URL('https://dogukanboltul.com.tr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Doğukan Böltül | E-Ticaret Operasyon Uzmanı',
    description: 'Dijital operasyonlarınızı verilerle ve sistemlerle optimize edin.',
    url: 'https://dogukanboltul.com.tr',
    siteName: 'Doğukan Böltül',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doğukan Böltül | E-Ticaret Danışmanı',
    description: 'Operasyonel verimlilik ve sistem tasarımı odaklı e-ticaret çözümleri.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}