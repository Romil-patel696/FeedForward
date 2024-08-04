import React, { useState } from 'react';
import './FilterPosts.css';
import FoodCard from './FoodCard';
import { useId } from 'react';

const getUnique = (items, value) => {
    if(value=='location.address'){
        return [...new Set(items.map((item) => item['location'].address))];
    }
    if(value=='postedBy.name'){
        return [...new Set(items.map((item) => item['postedBy'].name))];
    }
  return [...new Set(items.map((item) => item[value]))];
};

const FilterPosts = ({ posts }) => {
  const [foodDescription, setFoodDescription] = useState('all');
  const [status, setStatus] = useState('all');
  const [location, setLocation] = useState('all');
  const [postedBy, setPostedBy] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'foodDescription') setFoodDescription(value);
    if (name === 'status') setStatus(value);
    if (name === 'location') setLocation(value);
    if (name === 'postedBy') setPostedBy(value);
  };

  const handleSearch = () => {
    let tempPosts =posts;

    if (foodDescription !== 'all') {
      tempPosts = tempPosts.filter(post => post.foodDescription === foodDescription);
    }

    if (status !== 'all') {
      tempPosts = tempPosts.filter(post => post.status === status);
    }

    if (location !== 'all') {
      tempPosts = tempPosts.filter(post => post.location.address === location);
    }

    if (postedBy !== 'all') {
      tempPosts = tempPosts.filter(post => post.postedBy.name === postedBy);
    }

    setFilteredPosts(tempPosts);
  };

  // Get unique values
  let foodDescriptions = getUnique(posts, 'foodDescription');
  foodDescriptions = ['all', ...foodDescriptions];

  let locations = getUnique(posts, 'location.address');
  locations = ['all', ...locations];

  let postedBys = getUnique(posts, 'postedBy.name');
  postedBys = ['all', ...postedBys];

  let statuses = getUnique(posts, 'status');
  statuses = ['all', ...statuses];

  return (
    <div className="container mt-5">
      <h2>Filter Food Posts</h2>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="foodDescription">Food Description</label>
            <select
              name="foodDescription"
              id="foodDescription"
              value={foodDescription}
              className="form-control"
              onChange={handleChange}
            >
              {foodDescriptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select
              name="location"
              id="location"
              value={location}
              className="form-control"
              onChange={handleChange}
            >
              {locations.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="postedBy">Posted By</label>
            <select
              name="postedBy"
              id="postedBy"
              value={postedBy}
              className="form-control"
              onChange={handleChange}
            >
              {postedBys.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={status}
              className="form-control"
              onChange={handleChange}
            >
              {statuses.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <h2>Filtered Food Post</h2>
        {filteredPosts.map(post => (
              <FoodCard key={useId}post={post} />
         
        ))}
      </div>
    </div>
  );
};

export default FilterPosts;
