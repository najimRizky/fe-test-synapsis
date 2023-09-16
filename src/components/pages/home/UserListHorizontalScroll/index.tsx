import IUser from "@/interfaces/user"
import IUserListHorizontalScroll from "./interface"
import UserCard from "@/components/modules/UserCard"
import Link from "next/link"
import ArrowRightIcon from "@/components/icons/ArrowRightIcon"

const UserListHorizontalScroll = ({ users }: IUserListHorizontalScroll) => {
  return (
    <div className="flex overflow-x-auto pb-8 px-2 gap-6">
      {users.map((user: IUser, index) => (
        <UserCard key={index} user={user} />
      ))}
      <Link
        href="/user"
        className="h-32 flex items-center whitespace-nowrap hover:underline text-lg"
      >
        More Users &nbsp; <ArrowRightIcon width={20} />
      </Link>
    </div>
  )
}

export default UserListHorizontalScroll