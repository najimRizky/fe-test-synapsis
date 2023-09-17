"use client"

import SectionTitle from "@/components/modules/SectionTitle"
import IPostListUser from "./interface"
import { useEffect, useState } from "react"
import { getPostListByUserId } from "@/providers/post"
import PostList from "@/components/modules/PostList"
import Pagination from "@/components/modules/Pagination"
import Spinner from "@/components/modules/Spinner"


const PostListUser = ({ user }: IPostListUser) => {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState<{ data: any, metadata: any }>()
  const [loading, setLoading] = useState(true)

  const getPosts = async () => {
    setLoading(true)
    const res = await getPostListByUserId(user?.id, page)

    if (res.data) {
      res.data?.map((post: any) => post.user = user)
    }

    const data = res

    setLoading(false)
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div className="mt-8">
      <SectionTitle
        title={`${user?.name}'s Posts`}
        size="small"
      />

      {loading ? <Spinner /> :
        posts?.data?.length === 0 ? <p>No posts</p> : (
          <>
            <p className="text-md text-gray-500 mb-4 font-bold">Page: {page}</p>
            <PostList posts={posts?.data} />
            <Pagination
              page={page}
              maxPage={posts?.metadata?.maxPage}
              totalElement={posts?.metadata?.totalElement}
              customHandler={{
                next: () => setPage(page + 1),
                previous: () => setPage(page - 1)
              }}
            />
          </>
        )}
    </div>
  )
}

export default PostListUser