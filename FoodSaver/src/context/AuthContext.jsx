import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axios.post('/api/auth/login', { email, password });
    setUser(response.data.user);
  };

  const register = async (userData) => {
    const response = await axios.post('/api/auth/register', userData);
    setUser(response.data.user);
  };

  const logout = () => {
    setUser(null);
    // Further logout logic here
  };

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      const response = await axios.get('/api/auth/check');
      setUser(response.data.user);
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
