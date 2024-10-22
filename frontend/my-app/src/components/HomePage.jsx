// почему блять картинки не работают сука, временные поставил
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <div className="left-section">
            <button className="menu-icon" onClick={toggleSidebar}>☰</button> {/*почему-то не хочет открываться сайдбар*/}
            <div className="logo">VL.RU афиша</div>
          </div>
          <div className="right-section">
            <div className="search-icon" onClick={toggleSearch}>🔍</div> {/*заменить лупу иконкой*/}
            <button className="login-button">Войти</button>
          </div>
        </div>
        {/* поиск */}
        {isSearchOpen && (
          <div className="search-modal">
            <div className="search-header">
              <div className="input-container">
                <input type="text" placeholder="Поиск..." autoFocus />
                <div className="input-search-icon" onClick={toggleSearch}>
                  🔍
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

        <div className="button-container">
          {Array.from({ length: 9 }, (_, index) => (
            <button key={index} className="nav-button">
              Кнопка
            </button>
          ))}
        </div>
      </header>

      <main>
        <h1 className="events">События по датам 📅</h1>
        <div className="date-container">
          {Array.from({ length: 19 }, (_, index) => {
            const day = (index + 21) % 31;
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
      {isSidebarOpen && <Sidebar />}

      {/* footer */}
      <footer className="footer">
        <div className="footer-section">
          <h2 className="footer-heading">Помощь c билетами</h2>
          <div className="footer-buttons">
            <button className="return-button">ВЕРНУТЬ БИЛЕТЫ</button>
            <button className="find-button">НАЙТИ БИЛЕТЫ</button>
          </div>

          <ul className="footer-list">
            <a href="https://example.com">
              <span>Правила возврата билетов</span>
            </a>
            <a href="https://example.com">
              <span>Как найти билеты</span>
            </a>
            <a href="https://example.com">
              <span>Вопросы по билетам</span>
            </a>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Информация</h2>
          <ul className="footer-list">
            <a href="https://example.com">
              <span>Вакансии</span>
            </a>
            <a href="https://example.com">
              <span>Контакты</span>
            </a>
            <a href="https://example.com">
              <span>
                Информационное сотрудничество и продажа билетов на Афише VLru
              </span>
            </a>
            <a href="https://example.com">
              <span>
                Правила публикации события на Афише VL.ru
              </span>
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
// 