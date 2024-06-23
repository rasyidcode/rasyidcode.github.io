import Link from "next/link"
import { getBlogPosts } from "./blog/utils"

export default function Page() {
  let post = getBlogPosts()[0]

  return (
    <section>
      <h1 className=" text-2xl font-semibold tracking-tighter">hi there, rasyidcode here 👋</h1>
      <p>
        {`I am just testing this next.js framework to build a simple blog just like leerob.io,
        you can find the template on the official next.js site.`}
      </p>
      <div className="py-8">
        <Link href={`/blog/${post.slug}`}>
          <div className="border p-2">
            <p className=" font-medium">{post.metadata.title}</p>
            <p>{post.metadata.summary}</p>
          </div>
        </Link>
      </div>
    </section>
  )
}