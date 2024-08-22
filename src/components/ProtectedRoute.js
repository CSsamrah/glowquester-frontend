
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; // Check if user is admin

  if (!isAdmin) {
    return <Navigate to="/login" />; // Redirect to login page if not admin
  }

  return children;
};

export default ProtectedRoute;
