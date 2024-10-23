import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { Children } from "react";


const App = () => {

// сайдбар
const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false); // Закрываем сайдбар
    }
  };

// поиск

const [isSearchOpen, setSearchOpen] = useState(false);
  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);
  
  const myArr = [1,2,3]
  return (
    <div className="app">
      <header>
        <div className="header-content">
          <div className="left-section">
            <div className="menu-icon" onClick={toggleSidebar}>☰</div>
            <img className="logo" src="https://media.discordapp.net/attachments/1135282998313484450/1298547341347000320/logo.png?ex=6719f5f4&is=6718a474&hm=cdabd94d0f31851039b487e0f198e7f51610a078428153c71d3d808d782941ff&=&format=webp&quality=lossless"/>
          </div>
          <div className="right-section">
            <div onClick={toggleSearch}>
            <img className="search-icon" src="https://media.discordapp.net/attachments/1135282998313484450/1298548534915895346/search.png?ex=6719f710&is=6718a590&hm=1a8b2e751e2937bd4725cf3fc756ff28c6948db5350616d042fa96b30e789b08&=&format=webp&quality=lossless&width=325&height=325"/>
            </div>
            <button className="login-button">Вход</button>
          </div>
        </div>
        {/* поиск */}
        {isSearchOpen && (
          <div className="search-modal">
            <div className="search-header">
              <div className="input-container">
                <input type="text" placeholder="Поиск..." autoFocus />
                <div onClick={toggleSearch}>
                  <img className="input-search-icon" src="https://media.discordapp.net/attachments/1135282998313484450/1298548534915895346/search.png?ex=6719f710&is=6718a590&hm=1a8b2e751e2937bd4725cf3fc756ff28c6948db5350616d042fa96b30e789b08&=&format=webp&quality=lossless&width=325&height=325"/>
                </div>
              </div>
            </div>
            <div className="popular-queries">
              <h3>Популярные запросы:</h3>
              <ul>
                <li>пример</li>
                <li>пример</li>
                <li>пример</li>
                <li>пример</li>
                <li>пример</li>
                <li>пример</li>
              </ul>
            </div>
          </div>
        )}
      </header>
      <main>
      <div className="button-container">
          <button className="nav-button">Концерты</button>
          <button className="nav-button">Спорт</button>
          <button className="nav-button">Стендап</button>
          <button className="nav-button">Кино</button>
          <button className="nav-button">События</button>
          <button className="nav-button">Экскурсии</button>
          <button className="nav-button">Музеи</button>
          <button className="nav-button">Впечатления</button>
        </div>

        <h1 className="events">События по датам<img className="calendar-icon"src="https://media.discordapp.net/attachments/1135282998313484450/1298566143979552829/1815a8e622471f34.png?ex=671a0776&is=6718b5f6&hm=4a4e176665efbae160858964e78ee2d3740967c03a1a07dc615fbff0654ccb33&=&format=webp&quality=lossless&width=445&height=445"/></h1>
        <div className="date-container">
          {Array.from({ length: 19 }, (_, index) => {
            const day = (index + 1) % 31;
            const date = new Date(2024, 9, day === 0 ? 31 : day);
            const weekDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
            const weekDay = weekDays[date.getDay()];

            return (
              <div key={index} className="date-item">
                <div className="week-day">{weekDay}</div>
                <button className="date-button">{day === 0 ? 31 : day}</button>
              </div>
            );
          })}
        </div>
        <h1 className="for-you">Для вас</h1>
      </main>
      
      <Sidebar isOpen={isSidebarOpen} sidebarRef={sidebarRef} />
      
      {/* footer */}
      
      <footer>
        <div className="footer-section">
          <h2 className="footer-heading">Помощь c билетами</h2>
          <div className="footer-buttons">
            <button className="return-button">ВЕРНУТЬ БИЛЕТЫ</button>
            <button className="find-button">НАЙТИ БИЛЕТЫ</button>
          </div>
  <ul className="footer-list">
    <li>
      <a href="https://example.com">
        <span>Правила возврата билетов</span>
      </a>
    </li>
    <li>
      <a href="https://example.com">
        <span>Как найти билеты</span>
      </a>
    </li>
    <li>
      <a href="https://example.com">
        <span>Вопросы по билетам</span>
      </a>
    </li>
  </ul>
</div>
<div className="footer-section">
  <h2 className="footer-heading">Информация</h2>
  <ul className="footer-list">
    <li>
      <a href="https://example.com">
        <span className="sss">Вакансии</span>
      </a>
    </li>
    <li>
      <a href="https://example.com">
        <span>Контакты</span>
      </a>
    </li>
    <li>
      <a href="https://example.com">
        <span>Информационное сотрудничество и продажа билетов на Афише VL.ru</span>
      </a>
    </li>
    <li>
      <a href="https://example.com">
        <span>Правила публикации события на Афише VL.ru</span>
      </a>
    </li>
  </ul>
        </div>
      </footer>
    </div>

    
  );
};

export default App;

