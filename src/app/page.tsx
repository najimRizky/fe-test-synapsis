import SectionTitle from "@/components/modules/SectionTitle"
import PostList from "@/components/modules/PostList"
import { getPostList } from "@/providers/post"
import Banner from "@/components/pages/home/Banner"
import UserListHorizontalScroll from "@/components/pages/home/UserListHorizontalScroll"
import { getUserList } from "@/providers/user"
import Link from "next/link"
import ArrowRightIcon from "@/components/icons/ArrowRightIcon"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'S-BLOG',
  description: 'S-BLOG is a blog project that is built with Next.js, Tailwind CSS, and TypeScript.',
  publisher: 'synapsis.id',
  authors: [
    { name: 'Najim Rizky' },
  ]
}


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
            href="/post"
          />
          <PostList posts={posts?.data} />
          <Link
            href="/post"
            className="w-fit mx-auto flex items-center whitespace-nowrap hover:underline text-xl"
          >
            More Posts &nbsp; <ArrowRightIcon width={20} />
          </Link>
        </div>
        <div className="mt-16">
          <SectionTitle
            title="Users"
            description="See the list of users who have contributed to the S-BLOG project."
            href="/user"
          />
          <UserListHorizontalScroll users={users?.data} />
        </div>
      </div>
    </div>
  )
}

export default HomePage