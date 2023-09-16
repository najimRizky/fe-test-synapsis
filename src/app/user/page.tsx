import PageTitle from '@/components/modules/PageTitle';
import Pagination from '@/components/modules/Pagination';
import SearchInput from '@/components/modules/SearchInput';
import SectionTitle from '@/components/modules/SectionTitle';
import UserCard from '@/components/modules/UserCard';
import AddUser from '@/components/pages/user/AddUser';
import IUser from '@/interfaces/user';
import { getUserList } from '@/providers/user'
import React from 'react'

interface IUserPage {
  searchParams: { [key: string]: string };
}

const UserPage = async ({ searchParams }: IUserPage) => {
  const page = Number(searchParams.page) || 1
  const search = searchParams.q || ""
  const users = await getUserList({ page, query: search })

  return (
    <div className="container">
      <PageTitle
        title="USERS"
        description="See who's sharing their thoughts and stories with the world and connect with them."
      />
      <SearchInput placeholder="Search user by name..." />
      {users.data?.length === 0 ? (
        <div className="text-center text-gray-600 mt-0">
          No users found
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <SectionTitle title={`Page ${page}`} />
            <AddUser />
          </div>
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
        </>
      )}
    </div>
  )
}

export default UserPage