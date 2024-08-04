import React from 'react';
import FoodListPage from '../components/FoodListPage';
import FilterPosts from '../components/FilterPosts';
import { arr as posts } from '../data.js';
const FoodPostPage = () => {
  return (
    <div style={{paddingTop:'100px'}}> 
    <FilterPosts posts={posts} />
    
      <FoodListPage/>
    </div>
  );
};

export default FoodPostPage;
