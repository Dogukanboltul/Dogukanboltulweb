import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link' // Bu satır eksikti

export default function BlogPage() {
  // Yolu src/posts olarak güncelledik (Daha güvenli)
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  
  if (!fs.existsSync(postsDirectory)) {
    return <div className="p-10 text-white bg-black min-h-screen">Henüz yazı klasörü bulunamadı.</div>
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
    <main className="p-10 max-w-4xl mx-auto min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-10 border-b border-gray-800 pb-4">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block p-6 border border-gray-800 rounded-2xl hover:border-blue-500 transition-all">
            <h2 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300">{post.title}</h2>
            <p className="text-gray-400 mt-3 leading-relaxed">{post.description}</p>
            <div className="flex items-center mt-6 text-sm text-gray-500 font-mono">
              <span>{post.date}</span>
              <span className="mx-2">|</span>
              <span className="text-blue-500 uppercase">Okumaya Devam Et →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}