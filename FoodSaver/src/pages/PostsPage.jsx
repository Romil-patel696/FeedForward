import React, { useState } from 'react';
import './PostsPage.css';

const PostsPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [posts, setPosts] = useState([]);

  const handleAddPost = () => {
    const newPost = { title, description, location, quantity };
    setPosts([...posts, newPost]);
    setTitle('');
    setDescription('');
    setLocation('');
    setQuantity('');
  };

  return (
    <div className="container posts-page">
      <h1 className="text-center my-5">Feed Posts</h1>
      
      <div className="add-post-form card shadow-lg border-0 p-4 mb-5">
        <h2 className="text-center mb-4">Add a Post</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary btn-block" onClick={handleAddPost}>
          Add Post
        </button>
      </div>

      <div className="posts-list">
        {posts.map((post, index) => (
          <div key={index} className="post card shadow-lg border-0 p-4 mb-4">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p><strong>Location:</strong> {post.location}</p>
            <p><strong>Quantity:</strong> {post.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
