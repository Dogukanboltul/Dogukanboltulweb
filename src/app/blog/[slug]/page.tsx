import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  if (!fs.existsSync(postsDirectory)) return <div className="p-20 text-center text-white">Yazı bulunamadı.</div>

  const fileNames = fs.readdirSync(postsDirectory).filter(fn => fn.endsWith('.md'))
  const posts = fileNames.map(fn => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, fn), 'utf8')
    const { data } = matter(fileContents)
    return { slug: fn.replace(/\.md$/, ''), ...data } as any
  })

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto py-24 px-8">
        
        {/* Header: Daha Minimal ve Güçlü */}
        <header className="mb-32">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-blue-600"></div>
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase">Journal</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.8]">
            STRATEJİ <br /> <span className="text-gray-800">NOTLARI</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            E-ticaret mimarisi ve operasyonel mükemmellik üzerine derinlemesine teknik analizler.
          </p>
        </header>

        {/* Liste: Bento-Modern Akış */}
        <div className="grid gap-px bg-gray-900/50 border border-gray-900/50 overflow-hidden rounded-3xl">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative bg-black p-10 md:p-16 transition-all duration-500 hover:bg-[#050505]">
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-600 group-hover:text-blue-500 transition-colors uppercase">
                    MİMARİ / 01
                  </span>
                  <time className="text-[10px] text-gray-800 font-mono italic">{post.date}</time>
                </div>
                
                <div className="max-w-3xl">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 group-hover:text-white text-gray-300 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed line-clamp-2 font-light group-hover:text-gray-400 transition-colors">
                    {post.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-blue-600 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  ANALİZİ İNCELE <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}