import React, { useEffect, useState } from 'react'
import SeletonProfile from './skeletons/SeletonProfile'

const User = () => {
  const[profile,setProfile]=useState(null)
  useEffect(()=>{
    setTimeout(async()=>{
  const res=  await fetch(`https://jsonplaceholder.typicode.com/users/1`)
const data = await res.json();
setProfile(data)
    },6000)
  },[])
  return (
    <div className='user'>  
        <h2>User</h2>
        {profile && (
          <div className="profile">
            <h3 className="">{profile.username}</h3>
            <p className="">{profile.email}</p>
            <a href='' className="">{profile.website}</a>

          </div>
        )}
        {!profile && (
          <SeletonProfile theme={'dark'} />
        )}
        </div>
  )
}

export default User