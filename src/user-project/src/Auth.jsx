import React, { useState } from 'react'

const Auth = () => {
    const [authenticated, setAuthenticated] = useState(false);

    const loginAuth = () => { 
        setAuthenticated(true)

     }
    const logoutAuth = () => { 
        setAuthenticated(false)

     }
  return (
    <div>Auth</div>
  )
}

export default Auth