import React from 'react';
import './FoodCard.css';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ post }) => {
  const navigate = useNavigate();
  const handllClick=()=>{
    navigate(`/food-post/details/${post.id}`)
  }
  return (
       <div className="col-md-4 mb-3" key={post.id}>
            <div className="card" onClick={handllClick}>
              <div className="card-body">
                <h5 className="card-title">{post.id}</h5>
                <h5 className="card-title">{post.foodDescription}</h5>
                <p className="card-text"><strong>Quantity:</strong> {post.quantity}</p>
                <p className="card-text"><strong>Pickup Time:</strong> {new Date(post.pickupTime).toLocaleString()}</p>
                <p className="card-text"><strong>Location:</strong> {post.location.address}</p>
                <p className="card-text"><strong>Posted By:</strong> {post.postedBy.name} ({post.postedBy.contact})</p>
                <p className="card-text"><strong>Status:</strong> {post.status}</p>
              </div>
            </div>
          </div>
       
  );
};

export default FoodCard;
