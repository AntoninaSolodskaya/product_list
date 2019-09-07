import React from 'react';
import Loader from 'react-loader-spinner';
import './LoadingComponent.css';

const LoadingComponent = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner-container">
        <Loader 
          type="Oval" 
          color="#ffffff" 
          height={40} width={40} 
        />
        <span className="spinner-text">Loading...</span>
      </div>
    </div>
  )
};

export default LoadingComponent;