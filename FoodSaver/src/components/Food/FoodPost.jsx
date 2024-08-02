import React, { useState } from 'react';
import useFood from '../../hooks/useFood';
import axios from 'axios';

const FoodPost = () => {
  const [foodDescription, setFoodDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const { fetchFoodPosts } = useFood();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/food', { foodDescription, quantity, pickupTime });
    fetchFoodPosts();
    setFoodDescription('');
    setQuantity('');
    setPickupTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Food Description</label>
        <input
          type="text"
          value={foodDescription}
          onChange={(e) => setFoodDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Pickup Time</label>
        <input
          type="datetime-local"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Post Food</button>
    </form>
  );
};

export default FoodPost;
