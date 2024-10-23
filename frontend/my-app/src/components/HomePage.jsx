import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

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
            <div className="menu-icon" onClick={toggleSidebar}>☰</div> {/*почему-то не хочет открываться сайдбар*/}
            <img className="logo" src="https://media.discordapp.net/attachments/1135282998313484450/1298547341347000320/logo.png?ex=6719f5f4&is=6718a474&hm=cdabd94d0f31851039b487e0f198e7f51610a078428153c71d3d808d782941ff&=&format=webp&quality=lossless"/>
          </div>
          <div className="right-section">
            <div onClick={toggleSearch}>
            <img className="search-icon" src="https://media.discordapp.net/attachments/1135282998313484450/1298548534915895346/search.png?ex=6719f710&is=6718a590&hm=1a8b2e751e2937bd4725cf3fc756ff28c6948db5350616d042fa96b30e789b08&=&format=webp&quality=lossless&width=325&height=325"/>
            </div>
            <button className="login-button">Войти</button>
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
          {Array.from({ length: 9 }, (_, index) => (
            <button key={index} className="nav-button">
              Кнопка
            </button>
          ))}
        </div>

        <h1 className="events">События по датам</h1>
        <img className="calendar-icon"src="https://media.discordapp.net/attachments/1135282998313484450/1298566143979552829/1815a8e622471f34.png?ex=671a0776&is=6718b5f6&hm=4a4e176665efbae160858964e78ee2d3740967c03a1a07dc615fbff0654ccb33&=&format=webp&quality=lossless&width=445&height=445" alt="" />
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
      
      <Sidebar isOpen={isSidebarOpen} sidebarRef={sidebarRef} />
      {/* footer */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quasi nobis sapiente ratione ad quas voluptates cupiditate aut ipsam? Pariatur excepturi officia fugiat nobis labore atque veritatis illo suscipit aperiam dolor saepe explicabo voluptatem consequatur quasi velit autem, quis nihil dolores quo facilis quod debitis ad! Eligendi aut tenetur veritatis delectus alias quaerat repudiandae ducimus, exercitationem aperiam quas animi totam veniam dolores! Cum quos praesentium quis consectetur quas dolore exercitationem quaerat, error ex ipsum enim tempore dolores aliquam quasi doloremque possimus aspernatur sequi, beatae voluptas maxime laborum reiciendis ab! Rem temporibus sint natus accusamus in fugit a distinctio vitae ex tempora esse, sequi inventore molestiae amet. Optio beatae aspernatur sit eum iure? Temporibus eos ad esse amet maiores suscipit autem enim a blanditiis nisi voluptas ipsa asperiores, ea culpa repellendus consequuntur dolores nesciunt repudiandae quibusdam in vel minima. Explicabo dolore dolores ipsa! Assumenda veniam repellat nemo voluptatibus harum ea. Ratione, iure consectetur dolore quas aut animi libero eos sed debitis at dignissimos magnam esse alias corporis expedita eligendi ipsa deserunt saepe perferendis iusto! Sed sunt amet voluptatibus officia quos veritatis ipsa iste quisquam nostrum necessitatibus cumque quaerat harum reiciendis adipisci, inventore libero assumenda mollitia maxime dolor similique? Impedit debitis nobis distinctio voluptatum molestias nihil error vero consequuntur. Nisi ad at sed molestias, temporibus ut deleniti ratione dolore, laborum reiciendis eveniet quae aperiam tenetur? Sint voluptate placeat, deleniti explicabo architecto delectus a magnam voluptatibus! Ad, at! Numquam itaque, nulla labore atque vitae amet quaerat corporis esse odit fugiat ut. Inventore odit, dolorem possimus laborum labore deleniti at ipsum impedit reiciendis porro nam esse voluptate quis! Modi animi, dolor voluptatibus nam, fuga illum ut, veritatis et aperiam deleniti aliquam dolorum. Odit, nisi. Provident natus totam voluptate unde itaque alias sint laudantium nobis fugit. Veniam ea eligendi ipsa nihil inventore repellendus provident natus!</p>
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

