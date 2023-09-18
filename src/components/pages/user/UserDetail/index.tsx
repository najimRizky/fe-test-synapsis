import React from 'react'

const UserDetail = ({ user }: any) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{user?.name}</h1>
      <div>
        <div className="flex flex-col sm:flex-row">
          <p className="font-bold min-w-[4.5rem]">
            Email
          </p>
          <p className='break-words'>
            {user?.email}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <p className="font-bold min-w-[4.5rem] ">
            Gender
          </p>
          <p className="capitalize">
            {user?.gender}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <p className="font-bold min-w-[4.5rem] ">
            Status
          </p>
          <p className={`capitalize ${user?.status === "active" ? "text-green-500" : "text-red-500"}`}>
            {user?.status}
          </p>
        </div>

      </div>
    </div>
  )
}

export default UserDetail