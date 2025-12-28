import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CustomerQueue from './pages/CustomerQueue';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import Home from './pages/Home';

// Simple Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('admin_auth') === 'true';
  return isAuth ? children : <Navigate to="/login" replace />;
};

function App() {
  // Handle LIFF Path Redirect
  useEffect(() => {
    // Check if there is a path in the URL that React Router missed (common in SPAs with some hosting)
    const path = window.location.pathname;
    if (path.startsWith('/queue/') && window.location.search) {
      // Sometimes query params mess up clean routing, but this is basic check
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queue/:id" element={<CustomerQueue />} />
        <Route path="/login" element={<AdminLogin />} />

        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        {/* Catch-all redirect to help with debug */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
