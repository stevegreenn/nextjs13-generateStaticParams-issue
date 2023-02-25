import {fetchWrapper} from '#/lib/fetch-wrapper'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const getPostBySlug = async (slug: string): Promise<Post> => {
  const post = await fetchWrapper<Post>(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {
      next: {
        revalidate: 300,
      },
    },
  )

  return post
}


export { getPostBySlug }
