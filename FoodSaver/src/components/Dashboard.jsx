import React from 'react';
import PostsPage from '../pages/PostsPage';
import ProfilePage from '../pages/ProfilePage'
const Dashboard = () => {

  return (
    <>
    <div style={{paddingTop:'100px', marginLeft:'32vw' }}>
      <h1>Welcome To FEED Forward</h1>
      <ProfilePage/>
      
    </div>
    <PostsPage/>
    </>
  );
};

export default Dashboard;
