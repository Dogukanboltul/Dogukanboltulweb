import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  
  if (!fs.existsSync(postsDirectory)) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <p className="text-gray-500 font-medium">Henüz yayınlanmış bir yazı bulunamadı.</p>
      </div>
    )
  }

  const fileNames = fs.readdirSync(postsDirectory).filter(fn => fn.endsWith('.md'))
  
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return { slug, ...data } as any
  })

  // Yazıları tarihe göre yeniden eskiye sıralayalım
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Bölümü */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            BLOG
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            E-ticaret operasyonları, lojistik stratejileri ve girişimcilik üzerine teknik notlar.
          </p>
          <div className="h-1 w-20 bg-blue-600 mt-8 rounded-full"></div>
        </header>

        {/* Yazı Listesi */}
        <div className="grid gap-6">
          {sortedPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="group relative block p-8 border border-gray-800/50 rounded-[2rem] bg-[#111] hover:bg-[#161616] transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(37,99,235,0.2)]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-blue-500 uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      STRATEJİ
                    </span>
                    <time className="text-xs text-gray-600 font-mono italic">
                      {post.date}
                    </time>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 line-clamp-2 leading-relaxed text-sm md:text-base">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-black tracking-widest text-blue-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                OKUMAYA DEVAM ET <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Linki */}
        <div className="mt-20 text-center">
          <Link href="/" className="text-gray-600 hover:text-white transition-colors text-sm font-medium">
            ← Ana sayfaya dön
          </Link>
        </div>

      </div>
    </main>
  )
}