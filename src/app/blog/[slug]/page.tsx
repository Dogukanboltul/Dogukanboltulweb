import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Statik sayfa üretimi (SEO ve Hız için)
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return notFound()
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-blue-500/30">
      <article className="max-w-3xl mx-auto py-16 px-6">
        
        {/* Üst Navigasyon */}
        <nav className="mb-12">
          <Link href="/blog" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-all group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> 
            <span className="font-medium">Tüm Yazılar</span>
          </Link>
        </nav>

        {/* Başlık Bölümü */}
        <header className="mb-12 border-b border-gray-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white leading-tight">
            {data.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-widest text-[10px]">
              Makale
            </span>
            <span>•</span>
            <time className="font-mono">{data.date}</time>
          </div>
        </header>
        
        {/* Blog İçeriği - Typography Burada Devreye Girer */}
        <div className="prose prose-invert prose-blue lg:prose-xl max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
          prose-strong:text-blue-400 prose-blockquote:border-blue-500 
          prose-li:text-gray-300 prose-img:rounded-3xl prose-hr:border-gray-800">
          {content}
        </div>

        {/* Alt Bilgi */}
        <footer className="mt-20 pt-10 border-t border-gray-900 flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-6">Doğukan Böltül — E-Ticaret & Operasyonel Stratejiler</p>
          <Link href="/" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform active:scale-95">
            Ana Sayfaya Dön
          </Link>
        </footer>

      </article>
    </main>
  )
}