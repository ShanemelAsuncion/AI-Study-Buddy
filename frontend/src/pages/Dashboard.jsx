import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Dashboard() {
  const { user, logout } = useAuth0();

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Your email is: {user.email}</p>
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
}

export default Dashboard;