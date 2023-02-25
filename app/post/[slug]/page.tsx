import { Inter } from 'next/font/google'
import styles from '../../page.module.css'
import {notFound} from "next/navigation";
import {getPostBySlug} from "#/lib/posts";

const inter = Inter({ subsets: ['latin'] })

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className={styles.main}>
      <h1 className={inter.className}>{post.title}</h1>
      <p className={inter.className}>{post.body}</p>
    </main>
  )
}

export async function generateStaticParams() {
  const posts = await new Promise((resolve) => setTimeout((resolve([1,2,3])), 50))

  return posts.map((post) => ({
    slug: `${post}`
  }))
}