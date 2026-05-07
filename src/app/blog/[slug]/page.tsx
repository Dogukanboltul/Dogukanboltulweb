import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Statik yolları önceden belirleyerek 404 hatalarını önler
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts')
  if (!fs.existsSync(postsDirectory)) return []
  
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  // Next.js 15+ sürümleri için params'ı beklememiz (await) gerekebilir
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const postsDirectory = path.join(process.cwd(), 'src', 'posts')
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  // Dosya yoksa 404'e gönder
  if (!fs.existsSync(fullPath)) {
    return notFound()
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return (
    <main className="min-h-screen bg-black text-gray-200 selection:bg-blue-500/30">
      <article className="max-w-3xl mx-auto py-24 px-8">
        
        <Link href="/blog" className="text-[10px] font-black tracking-[0.3em] text-gray-700 hover:text-white mb-20 inline-block transition-colors uppercase">
          ← Geri Dön
        </Link>

        <header className="mb-24 text-left">
          <div className="flex items-center gap-4 mb-8">
             <span className="h-[1px] w-12 bg-blue-600"></span>
             <time className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">{data.date}</time>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-white leading-[0.9]">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            {data.description}
          </p>
        </header>
        
        {/* Markdown İçeriği */}
        <div className="prose prose-invert prose-blue lg:prose-xl max-w-none 
          prose-headings:font-bold prose-headings:tracking-tighter prose-headings:text-white
          prose-p:text-gray-400 prose-p:leading-[1.9] prose-p:mb-10
          prose-strong:text-white prose-blockquote:border-l-[1px] prose-blockquote:border-blue-600
          prose-hr:border-gray-900">
          {content}
        </div>

        <footer className="mt-32 pt-16 border-t border-gray-900 flex justify-between items-center text-[10px] font-bold tracking-[0.3em] text-gray-700">
            <span className="uppercase text-blue-500">Doğukan Böltül</span>
            <span className="uppercase">Analiz Tamamlandı</span>
        </footer>
      </article>
    </main>
  )
}