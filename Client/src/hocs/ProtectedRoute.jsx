import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute() {


  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return user ? <Outlet /> : <Navigate to="/login" />;

}