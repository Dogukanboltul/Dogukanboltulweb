import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  
  if (!fs.existsSync(postsDirectory)) {
    return <div className="p-20 text-center text-white bg-black min-h-screen">Henüz yazı klasörü bulunamadı.</div>
  }

  const fileNames = fs.readdirSync(postsDirectory).filter(fn => fn.endsWith('.md'))
  
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return { slug, ...data } as any
  })

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto py-24 px-8">
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
            BLOG
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Stratejik analizler ve operasyonel notlar.
          </p>
        </header>

        <div className="flex flex-col gap-px bg-gray-900/50 border border-gray-900/50 rounded-3xl overflow-hidden">
          {posts.map((post) => (
            <a 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group relative block bg-black p-10 md:p-16 transition-all duration-300 hover:bg-[#080808] border-b border-gray-900 last:border-0 cursor-pointer"
            >
              <div className="flex flex-col gap-6 relative z-10 pointer-events-none">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-widest text-blue-500 uppercase">
                    İnceleme
                  </span>
                  <time className="text-[10px] text-gray-700 font-mono">{post.date}</time>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-200 group-hover:text-white transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed line-clamp-2">
                  {post.description}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-600">
                  ANALİZİ OKU <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}