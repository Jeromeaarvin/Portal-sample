import React, { useState } from 'react';
import './Overlaystyles.css'; // CSS file for styling

// ComponentB - The component to be displayed after clicking ComponentA
const ComponentB = () => {
  return (
    <div className="component-b">
      Component B
    </div>
  );
};

// ComponentA - The component which will be replaced by ComponentB
const ComponentA = ({ handleClick }) => {
  return (
    <div className="component-a" onClick={handleClick}>
      Component A
      
    </div>
    
  );
};

// App - The parent component
const Overlay = () => {
  const [showComponentB, setShowComponentB] = useState(false);

  const handleClick = () => {
    setShowComponentB(true);
  };

  return (
    <div className="app">
      {showComponentB ? <ComponentB /> : <ComponentA handleClick={handleClick} />}
      <button onClick={handleClick}>Done</button>
    </div>
  );
};

export default Overlay;
