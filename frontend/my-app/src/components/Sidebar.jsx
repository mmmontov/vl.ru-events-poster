import React from 'react';
import './Sidebar.css';

const Sidebar = () => {  {/*заменить картики на иконки*/}
  return (
    <div className="sidebar">
      <div className='container'>
      <div className='line'></div>
      <a href="https://example.com" rel="">
        <img src="./images/logo2.png" className='logo2' alt="Logo"/>
        <span className='home'> Главная VL.ru</span>
      </a>
      <div className='line'></div>

      <div className='login'>
        <a href="https://example.com">
          <img src="./images/logo2.png" alt="User"/>
          <span className='Fullname'>Райан Гослинг</span>
        </a>
      </div>

      <div className='tickets'>
        <a href="https://example.com">
          <img src="./images/logo2.png" alt="Tickets"/>
          <span className='tickets-vlru'>Билеты VL.ru</span>
        </a>
      </div>

      <div className='selected'>
        <a href="https://example.com">
          <img src="./images/logo2.png" alt="Favorites"/>
          <span className='favourite'>Избранное</span>
        </a>
        <div className='line2'></div>
      </div>

    <div className='location'>
    <a href="https://example.com">
      <img src="./images/logo2.png" alt="Сity"/>
      <span className='city'>Владивосток</span>
    </a>
    <div className='line2'></div>
  </div>

  <div className='log-out'>
    <a href="https://example.com">
      <img src="./images/logo2.png" alt="Выход"/>
      <span className='logout'>Владивосток</span>
    </a>
    <div className='line2'></div>
  </div>
  </div>
</div>
  );
};

export default Sidebar;