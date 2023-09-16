import SectionTitle from "@/components/modules/SectionTitle"
import PostCommens from "@/components/pages/post/PostComments"
import { getPostById } from "@/providers/post"
import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

interface IPostDetailPage {
  params: { id: string }
}

export async function generateMetadata({ params }: IPostDetailPage, parent: ResolvingMetadata): Promise<Metadata> {
  const id = Number(params.id)
  const post = await getPostById(id)

  if (!post.data) return notFound()
  const { data } = post

  return {
    title: data?.title,
    description: data?.body,
    authors: [{ name: data?.user?.name || "Unknown" }],
    publisher: "S-BLOG - Synapsis.id",
  }
}

const PostDetailPage = async ({ params }: IPostDetailPage) => {
  const id = Number(params.id)
  if (isNaN(id)) return notFound()

  const post = await getPostById(id)
  const { data } = post

  return (
    <div className="container">
      <h1 className="text-4xl font-bold">{data?.title}</h1>
      <p className="mt-4 text-gray-500">
        <span className="font-bold">Author:</span> {data?.user ? (
          <Link
            href={`/user/${data?.user?.id}`}
            className="hover:underline"
          >
            {data?.user?.name}
          </Link>
        ) : (
          "Unknown"
        )}
      </p>
      <p className="mt-4 text-gray-500 mb-8">{data?.body}</p>
      <SectionTitle
        title="Comments"
      />
      <PostCommens id={id} />
    </div>
  )
}

export default PostDetailPage