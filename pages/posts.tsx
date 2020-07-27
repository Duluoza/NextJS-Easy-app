import { MainLayout } from "../components/mainLayout";
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { MyPost } from '../interfaces/post';
import { NextPageContext } from "next";

interface PostPageProps {
  posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:4200/posts');
      const json = await response.json()
      setPosts(json)
    }

    if(!serverPosts) {
      load()
    }
  }, [])

  if(!posts) {
    return <MainLayout>
        <p>Loading...</p>
      </MainLayout>
  }

  return (
    <MainLayout title={'Posts Page'}>
      <h1>Post pages</h1>

      <ul>
        {posts.map(p => (
          <li key={p.id}>
              <Link href={'/post/[id]'} as={`/post/${p.id}`}><a>{p.title}</a></Link>
          </li>
        ))}
      </ul>

    </MainLayout>
  )
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {

  if (!req) {
    return { posts: null }
  }

  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await response.json()

  return {
    posts
  }
}