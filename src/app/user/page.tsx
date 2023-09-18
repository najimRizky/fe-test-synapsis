import PageTitle from '@/components/modules/PageTitle';
import Pagination from '@/components/modules/Pagination';
import SearchInput from '@/components/modules/SearchInput';
import SectionTitle from '@/components/modules/SectionTitle';
import UserCard from '@/components/modules/UserCard';
import AddUser from '@/components/pages/user/AddUser';
import IUser from '@/interfaces/user';
import { getUserList } from '@/providers/user'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'S-BLOG | USERS',
  description: 'S-BLOG is a blog project that is built with Next.js, Tailwind CSS, and TypeScript.',
  publisher: 'synapsis.id',
  authors: [
    { name: 'Najim Rizky' },
  ]
}

interface IUserPage {
  searchParams: { [key: string]: string };
}

const UserPage = async ({ searchParams }: IUserPage) => {
  const page = Number(searchParams.page) || 1
  const search = searchParams.q || ""
  const users = await getUserList(page, search)

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
            <SectionTitle
              title={`Page ${page}`}
              size='small'
            />
            <AddUser />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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