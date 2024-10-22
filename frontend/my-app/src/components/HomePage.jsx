import React, { useState }from "react";
import Sidebar from "./Sidebar";

const App = () => {
  return (
      <div className="app">
          <header>
              <div className="header-content">
                  <div className="menu-icon">☰</div>
                  <div className="logo">VL.RU афиша</div>
                  <div className="search-icon">🔍</div>
                  <button className="login-button">Войти</button>
              </div>
              
              <div className="button-container">
          {Array.from({ length: 9 }, (_, index) => (
            <button key={index} className="nav-button">Кнопка</button>
          ))}
        </div>
          </header>
          
          <main>
<h1 className="events">События по датам 📅</h1>
<div className="date-container">
    {Array.from({ length: 19 }, (_, index) => {
        const day = (index + 21) % 31;
        const date = new Date(2024, 9, day === 0 ? 31 : day); 
        const weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        const weekDay = weekDays[date.getDay()];

        return (
            <div key={index} className="date-item">
                <div className="week-day">{weekDay}</div>
                <button className="date-button">
                    {day === 0 ? 31 : day}
                </button>
            </div>
        );
    })}
</div>
<h1 className="for-you">Для вас</h1>




          </main>
      </div>
  );
};

export default App;