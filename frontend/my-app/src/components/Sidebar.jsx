import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
       <a href="https://example.com" rel="" >
       <img src="./images/logo.png style={{ width: '100%', height: 'auto' }}" alt="" />
       </a>
      <span>Главная VL.ru</span>
    </div>
  );
};

export default Sidebar;


