import React from 'react';
import useFood from '../../hooks/useFood';
import { Link } from 'react-router-dom';

const FoodList = () => {
  const { foodPosts } = useFood();

  return (
    <div>
      <ul>
        {foodPosts.map((post) => (
          <li key={post._id}>
            <Link to={`/food/${post._id}`}>
              <p>{post.foodDescription}</p>
            </Link>
            <p>Quantity: {post.quantity}</p>
            <p>Pickup Time: {new Date(post.pickupTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
