import FoodCard from './FoodCard.jsx';
import {arr} from "../data.js"
import './FoodList.css';

const FoodListPage = () => {
  return (
    <div className="food-list">
      <h2>Available Food Posts</h2>
      <div className="food-card-container">
      
        {arr.map(post => (
          <FoodCard key={post.id} post={post} />
        ))}
      
      </div>
    </div>
  );
};

export default FoodListPage;
