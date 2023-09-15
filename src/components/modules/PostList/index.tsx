import IPost from "@/interfaces/post"
import IPostList from "./interface"
import PostCard from "@/components/modules/PostCard"

const PostList = ({ posts }: IPostList) => {
  return (
    <div className="grid">
      {posts.map((post: IPost) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList