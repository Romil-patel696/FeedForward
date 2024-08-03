import React from 'react';
// import useAuth from '../hooks/useAuth';

const ProfilePage = () => {
  // const { user } = useAuth();

  return (
    <div style={{marginLeft:'7em'}}>
      <h1>Profile Page</h1>
      <p>Name: Romil Patel</p>
      {/* <p>Name: {user.name}</p> */}
      <p>Email: romil@gmail.com</p>
      {/* <p>Email: {user.email}</p> */}
    </div>
  );
};

export default ProfilePage;
