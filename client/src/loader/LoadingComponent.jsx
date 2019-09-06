import React from 'react';
import Loader from 'react-loader-spinner';
import './LoadingComponent.css';

const LoadingComponent = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Loader 
          type="Oval" 
          color="#ffffff" 
          height={40} width={40} 
        />
        <span>Loading...</span>
      </div>
    </div>
  )
};

export default LoadingComponent;