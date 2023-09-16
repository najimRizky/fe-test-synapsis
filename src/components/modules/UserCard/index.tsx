import React from 'react'
import IUserCard from './interface'
import Link from 'next/link'
import UserIcon from '@/components/icons/UserIcon'
import MailIcon from '@/components/icons/MailIcon'

const UserCard = ({ user }: IUserCard ) => {
  return (
    <Link
      href={`/user/${user.id}`}
      className="min-w-[14rem] h-32 shadow-sm cursor-pointer p-2 py-4 space-y-1 hover:shadow-lg duration-300 border-2 rounded-md"
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
  )
}

export default UserCard