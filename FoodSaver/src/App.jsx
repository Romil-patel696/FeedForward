import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FoodPostPage from './pages/FoodPostPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notifications from './components/Notifications';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage></HomePage>} />
        <Route path="/food-post" element={<FoodPostPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
      <Notifications />
      <Footer />
    </Router>
  );
};

export default App;
