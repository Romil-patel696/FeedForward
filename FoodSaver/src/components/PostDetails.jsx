import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css'; // Import the CSS file
import {arr} from '../data.js';

const PostDetails = () => {
    const { id } = useParams();
    const post=arr.filter(elem => elem.id==id)[0];
  const [claimFormVisible, setClaimFormVisible] = useState(false);
  const [claimDetails, setClaimDetails] = useState({
    name: '',
    numberOfPeople: '',
    contactNumber: '',
    additionalInfo: ''
  });
  console.log(post)

  const handleClaimButtonClick = () => {
    setClaimFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClaimDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Claim Details:', claimDetails);
    // Add your form submission logic here (e.g., send the data to a backend server)
    setClaimFormVisible(false);
    setClaimDetails({
      name: '',
      numberOfPeople: '',
      contactNumber: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="post-details">
        <h3>djhfghjdsfj</h3>
      <p className="post-description">{post.foodDescription}</p>
      <p className="post-info"><strong>Posted by:</strong>  {post.postedBy.name} ({post.postedBy.contact})</p>
      <p className="post-info"><strong>Location:</strong>{post.location.address}</p>
      <p className="post-info"><strong>Pickup Time:</strong> {new Date(post.pickupTime).toLocaleString()}</p>
      <p className="post-info"><strong>Quantity:</strong> {post.quantity}</p>
      <p className="post-info"><strong>Status:</strong> {post.status}</p>
      <button className="claim-button" onClick={handleClaimButtonClick}>Claim</button>

      {claimFormVisible && (
        <form className="claim-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label">
              Name:
              <input 
                type="text" 
                name="name" 
                value={claimDetails.name} 
                onChange={handleInputChange} 
                required 
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              Number of People:
              <input 
                type="number" 
                name="numberOfPeople" 
                value={claimDetails.numberOfPeople} 
                onChange={handleInputChange} 
                required 
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              Contact Number:
              <input 
                type="text" 
                name="contactNumber" 
                value={claimDetails.contactNumber} 
                onChange={handleInputChange} 
                required 
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              Additional Information:
              <textarea 
                name="additionalInfo" 
                value={claimDetails.additionalInfo} 
                onChange={handleInputChange} 
              />
            </label>
          </div>
          <button className="submit-button" type="submit">Submit Claim</button>
        </form>
      )}
    </div>
  );
};

// Example usage
// const examplePost = {
//   title: 'Leftover Food from Party',
//   description: 'We have some leftover food from a party, including rice, curry, and bread.',
//   postedBy: 'Hostel A',
//   location: 'Sector 45, Noida',
//   quantity: '10 meals'
// };

export default PostDetails;
