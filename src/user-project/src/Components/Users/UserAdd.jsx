import React, { useState } from 'react'

const UserAdd = () => {

    const [userAdd, setUserAdd] = useState({
        
    });

    fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'Muhammad',
    lastName: 'Ovi',
    age: 250,
    /* other user data */
  })
})
.then(res => res.json())
.then(console.log);

  return (
    <div>UserAdd</div>
  )
}

export default UserAdd