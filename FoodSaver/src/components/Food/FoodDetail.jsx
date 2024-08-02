import React from 'react';
import { useParams } from 'react-router-dom';
import useFood from '../../hooks/useFood';

const FoodDetail = () => {
  const { id } = useParams();
  const { foodPosts } = useFood();
  const post = foodPosts.find((p) => p._id === id);

  if (!post) {
    return <p>Food post not found</p>;
  }

  return (
    <div>
      <h1>{post.foodDescription}</h1>
      <p>Quantity: {post.quantity}</p>
      <p>Pickup Time: {new Date(post.pickupTime).toLocaleString()}</p>
    </div>
  );
};

export default FoodDetail;
