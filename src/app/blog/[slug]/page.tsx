import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'

// SEO ve 404 önlemek için statik yolları önceden bildiriyoruz
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
    <article className="max-w-3xl mx-auto py-20 px-6 text-white bg-black min-h-screen">
      <header className="mb-10 border-b border-gray-800 pb-8">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-400">{data.title}</h1>
        <time className="text-gray-500 italic">{data.date}</time>
      </header>
      
      <div className="prose prose-invert lg:prose-xl leading-relaxed whitespace-pre-wrap">
        {content}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
          ← Blog Listesine Dön
        </Link>
      </div>
    </article>
  )
}