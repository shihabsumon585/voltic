"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const UserCard = () => {
    const session = useSession();
    console.log(session)
  return (
    <div>
      <h1>User Client</h1>
      <p className='border-2 '>{JSON.stringify(session)}</p>
    </div>
  )
}

export default UserCard;
