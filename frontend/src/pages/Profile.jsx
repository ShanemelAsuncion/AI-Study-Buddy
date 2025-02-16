import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function Profile() {
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
}

export default Profile;