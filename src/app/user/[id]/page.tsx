import EditUser from "@/components/pages/user/EditUser"
import PostLisUser from "@/components/pages/user/PostListUser"
import UserDetail from "@/components/pages/user/UserDetail"
import { getUserById } from "@/providers/user"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"

interface IUserDetailPage {
  params: { id: string }
}

export async function generateMetadata({ params }: IUserDetailPage, parent: ResolvingMetadata): Promise<Metadata> {
  const id = Number(params.id)
  const post = await getUserById(id)

  if (!post.data) return notFound()
  const { data } = post

  return {
    title: `${data?.name}'s Profile`,
    description: `This is ${data?.name}'s profile`,
    publisher: "S-BLOG - Synapsis.id",
  }
}

const UserDetailPage = async ({ params }: IUserDetailPage) => {
  const id = Number(params.id)
  if (isNaN(id)) return notFound()

  const user = await getUserById(id)
  const { data } = user

  return (
    <div className="container">
      <div className="flex justify-between">
        <UserDetail user={data} />
        <EditUser user={data} />
      </div>

      <div className="mt-8">
        <PostLisUser user={data} />
      </div>
    </div>
  )
}

export default UserDetailPage