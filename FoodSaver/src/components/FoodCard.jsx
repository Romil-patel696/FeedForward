import React from 'react';
import './FoodCard.css';

const FoodCard = ({ post }) => {
  return (
    <div className="food-card">
      <h2>{post.foodDescription}</h2>
      <p><strong>Quantity:</strong> {post.quantity}</p>
      <p><strong>Pickup Time:</strong> {new Date(post.pickupTime).toLocaleString()}</p>
      <p><strong>Location:</strong> {post.location.address}</p>
      <p><strong>Status:</strong> {post.status}</p>
      <p><strong>Posted By:</strong> {post.postedBy.name} ({post.postedBy.contact})</p>
    </div>
  );
};

export default FoodCard;
