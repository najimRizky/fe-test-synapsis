import Link from "next/link"
import IPostCard from "./interface"

const PostCard = ({ post }: IPostCard) => {
  return (
    <div
      className="pb-4 mb-4 border-b border-slate-300 hover:translate-x-1 duration-300 hover:-translate-y-1 hover:border-slate-600 grid gap-y-2"
    >
      <Link href={`/post/${post.id}`}>
        <h2 className="text-lg font-bold line-clamp-2">{post.title}</h2>
        <p className="line-clamp-2 leading-tight text-sm">{post.body}</p>
      </Link>
      <div className="text-xs">
        By:&nbsp;
        {post.user ? (
          <Link href={`/user/${post.user_id}`} className="hover:underline">{post.user?.name}</Link>
        ) : (
          <span className="text-slate-500">Unknown</span>
        )}
      </div>
    </div>
  )
}

export default PostCard