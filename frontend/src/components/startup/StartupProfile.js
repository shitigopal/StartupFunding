import React, { useState } from 'react'

const UserProfile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('startup')))

  return (
    <div>UserProfile</div>
  )
}

export default UserProfile