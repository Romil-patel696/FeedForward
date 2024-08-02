import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const [foodPosts, setFoodPosts] = useState([]);

  const fetchFoodPosts = async () => {
    const response = await axios.get('/api/food');
    setFoodPosts(response.data);
  };

  useEffect(() => {
    fetchFoodPosts();
  }, []);

  return (
    <FoodContext.Provider value={{ foodPosts, fetchFoodPosts }}>
      {children}
    </FoodContext.Provider>
  );
};


export {FoodContext, FoodProvider};