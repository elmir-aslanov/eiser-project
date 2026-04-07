import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Not Found</h1>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default NotFound;
