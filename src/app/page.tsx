import SectionTitle from "@/components/modules/SectionTitle"
import PostList from "@/components/modules/PostList"
import { getPostList } from "@/providers/post"
import Banner from "@/components/pages/home/Banner"
import UserListHorizontalScroll from "@/components/pages/home/UserListHorizontalScroll"
import { getUserList } from "@/providers/user"

const HomePage = async () => {
  const posts = await getPostList()
  const users = await getUserList()
  
  return (
    <div>
      <Banner />
      <div className="container">
        <div className="mt-16">
          <SectionTitle
            title="Posts"
            description="Explore a treasure trove of articles, stories, and insights in our post list section, where knowledge and inspiration converge."
          />
          <PostList posts={posts?.data} />
        </div>
        <div className="mt-16">
          <SectionTitle
            title="Users"
            description="See the list of users who have contributed to the S-BLOG project."
          />
          <UserListHorizontalScroll users={users?.data} />
        </div>
      </div>
    </div>
  )
}

export default HomePage