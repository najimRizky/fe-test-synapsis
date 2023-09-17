import React from 'react'

const UserDetail = ({ user }: any) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{user?.name}</h1>
      <div className="flex gap-4">
        <div>
          <p className="font-bold">
            Email
          </p>
          <p className="font-bold">
            Gender
          </p>
          <p className="font-bold">
            Status
          </p>
        </div>
        <div >
          <p>
            : {user?.email}
          </p>
          <p className="capitalize">
            : {user?.gender}
          </p>
          <p className={`capitalize ${user?.status === "active" ? "text-green-500" : "text-red-500"}`}>
            : {user?.status}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserDetail