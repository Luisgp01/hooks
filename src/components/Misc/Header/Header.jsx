import React from 'react';
import './Header.css'

const Head = ({ children }) => {
  return (
    <div className="Header">
      {children}
    </div>
  );
};

export default Head;