import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {PostCard, Categories, PostWidget} from '../components'
import { getPosts } from '../services/index'

const posts = [
  {title: 'this is title', excerpt: 'this is some excerpt'},
  {title: 'this is title second', excerpt: 'this is some more excerpt '}
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Parliament Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post,index) => (
            <PostCard post= {post} key={post.title}/>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative-8">
            <PostWidget />
            <PostWidget />
            
          </div>            
        </div> 
      </div>
          
    </div>
  )
}

export default Home
