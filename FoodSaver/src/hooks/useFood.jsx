import { useContext } from 'react';
import { FoodContext } from '../context/FoodContext';

const useFood = () => {
  return useContext(FoodContext);
};

export default useFood;
