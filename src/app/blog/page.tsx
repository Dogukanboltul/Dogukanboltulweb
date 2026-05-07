import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  if (!fs.existsSync(postsDirectory)) return <div>Henüz yazı yok.</div>
  
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return { slug, ...data } as any
  })

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-white">Blog Yazıları</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-6 border border-gray-700 rounded-xl hover:bg-gray-800 transition">
            <h2 className="text-xl font-bold text-blue-400">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.description}</p>
            <span className="text-sm text-gray-500 mt-4 block">{post.date}</span>
          </Link>
        ))}
      </div>
    </main>
  )
}