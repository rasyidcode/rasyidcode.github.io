import { getBlogPosts } from "../utils"

export async function generateStaticParams() {
    const posts = getBlogPosts()
    
    return posts.map((post) => ({
        slug: post.slug
    }))
}

export default function Blog({ params }: any) {
    // const post = getBlogPosts().find((post) => post.slug === params.slug)
    // console.log(post)
    return <h1>Hello, World!</h1>
}