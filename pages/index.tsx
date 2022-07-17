import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {PostCard, Categories, PostWidget} from '../components'
import { getPosts } from '../services'

// const posts = [
//   {title: 'this is title', excerpt: 'this is some excerpt'},
//   {title: 'this is title second', excerpt: 'this is some more excerpt '}
// ]

export default function Home({ posts }){
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Parliament Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post,index) => <PostCard post= {post.node} key={post.title}/>
          )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative-8">
            <PostWidget />
            <Categories />
            
          </div>            
        </div> 
      </div>
          
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}


