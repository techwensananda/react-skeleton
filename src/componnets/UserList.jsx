import React, { useEffect, useState } from 'react'
import SkeletonTable from './skeletons/SkeletonTable'

const UserList = () => {
  const[profiles,setProfiles]=useState(null)
  useEffect(()=>{
    setTimeout(async()=>{
  const res=  await fetch(`https://jsonplaceholder.typicode.com/users`)
const data = await res.json();
setProfiles(data)
    },6000)
  },[])
  return (
    <div className='user'>  
        <h2>Users List</h2>
        <div className="table-container">
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>

  {profiles &&  profiles.map(user=>(
             
         <tr key={user.id}>
      <th scope="row">1</th>
      <td>{user?.name}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
    </tr>

         
        ))}
   
    
  </tbody>
</table>
</div>
        {!profiles && (
          [...Array(5)].map(n=>( <SkeletonTable key={n+1}  />))    
        )}



        </div>
  )
}

export default UserList