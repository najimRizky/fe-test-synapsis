import PageTitle from "@/components/modules/PageTitle"
import Pagination from "@/components/modules/Pagination";
import PostList from "@/components/modules/PostList";
import SearchInput from "@/components/modules/SearchInput";
import SectionTitle from "@/components/modules/SectionTitle";
import { getPostList } from "@/providers/post"

interface IPostPage {
  searchParams: { [key: string]: string };
}

const PostPage = async ({ searchParams }: IPostPage) => {
  const page = Number(searchParams.page) || 1
  const search = searchParams.q || ""
  const posts = await getPostList({ page, query: search })
  return (
    <div className="container">
      <PageTitle
        title="POSTS"
        description="Explore a world of diverse content, from news and reviews to travel adventures and lifestyle tips, all in one place."
      />
      <SearchInput placeholder="Enter your search term here..." />
      {posts.data?.length === 0 ? (
        <div className="text-center text-gray-600 mt-0">
          No posts found
        </div>
      ) : (
        <>
          <SectionTitle title={`Page ${page}`} />
          <PostList posts={posts.data} />
          <Pagination
            page={page}
            maxPage={posts.metadata.maxPage}
            totalElement={posts.metadata.totalElement}
          />
        </>
      )}
    </div>
  )
}

export default PostPage