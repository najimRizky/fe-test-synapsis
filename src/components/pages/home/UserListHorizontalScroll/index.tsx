import IUser from "@/interfaces/user"
import IUserListHorizontalScroll from "./interface"
import UserIcon from "@/components/icons/UserIcon"
import MailIcon from "@/components/icons/MailIcon"
import Link from "next/link"

const UserListHorizontalScroll = ({ users }: IUserListHorizontalScroll) => {
  return (
    <div className="flex overflow-x-auto pb-8">
      {users.map((user: IUser, index) => (
        <Link
          href={`/users/${user.id}`}
          key={index}
          className="min-w-[14rem] h-32 mx-2 shadow-sm cursor-pointer p-2 py-4 space-y-1 hover:shadow-lg duration-300"
        >
          <div className="flex gap-2 items-start font-bold  ">
            <UserIcon width={22} />
            <h3 className="overflow-ellipsis whitespace-nowrap overflow-hidden">{user.name}</h3>
          </div>
          <div className="flex gap-2 items-start">
            <MailIcon width={22} />
            <p className="overflow-ellipsis whitespace-nowrap overflow-hidden">{user.email}</p>
          </div>
          <p className={`text-sm capitalize font-bold`}>
            {user.gender}
          </p>
          <p className={`text-sm capitalize font-bold ${user.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
            {user.status}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default UserListHorizontalScroll