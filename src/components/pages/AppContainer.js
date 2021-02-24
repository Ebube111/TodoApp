import React from "react";

import image from '../../images/daily-planner.jpg'
import './AppContainer.css'

const AppContainer = () => {
  return (
    <div className="main-container">
      <div className="text-gray-600 side-text">
        <h1 >Those who fail to plan, PLAN to fail!</h1>
        <div className="pt-3 pl-3 text-side text-red-700">
          <h1 className="font-mono">START SOMEWHERE!!!</h1>
        </div>
        </div>
        
      <div className="sub-container">
        <img className="animate-pulse bg-image-style" src={image} alt="planner" />
      
      </div>
    </div>
  );
};

export default AppContainer;
