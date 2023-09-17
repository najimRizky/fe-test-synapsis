import DeletePost from "@/components/pages/post/DeletePost"
import EditPost from "@/components/pages/post/EditPost"
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
      <div className="flex justify-between gap-x-8">
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <div className="flex gap-x-2 flex-shrink-0">
          <EditPost data={data} />
          <DeletePost id={id} />
        </div>
      </div>
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
      <PostCommens id={id} />
    </div>
  )
}

export default PostDetailPage