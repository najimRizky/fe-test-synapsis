import PageTitle from '@/components/modules/PageTitle';
import Pagination from '@/components/modules/Pagination';
import SectionTitle from '@/components/modules/SectionTitle';
import UserCard from '@/components/modules/UserCard';
import IUser from '@/interfaces/user';
import { getUserList } from '@/providers/user'
import React from 'react'

interface IUserPage {
  searchParams: { [key: string]: string | string[] | undefined };
}

const UserPage = async ({ searchParams }: IUserPage) => {
  const page = Number(searchParams.page) || 1
  const users = await getUserList(page)

  return (
    <div className="container">
      <PageTitle
        title="USERS"
        description="See who's sharing their thoughts and stories with the world and connect with them."
      />
      <SectionTitle title={`Page ${page}`} />
      <div className="grid grid-cols-4 gap-8">
        {users.data.map((user: IUser) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination
        page={page}
        maxPage={users.metadata?.maxPage}
        totalElement={users.metadata?.totalElement || 1}
      />
    </div>
  )
}

export default UserPage