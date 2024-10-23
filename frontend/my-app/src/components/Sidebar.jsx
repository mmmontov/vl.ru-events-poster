import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, sidebarRef }) => { 
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className='container'>
      <div className='line'></div>
      <a href="https://example.com" rel="">
        <img className='logo2' src="https://media.discordapp.net/attachments/1135282998313484450/1298551235074326560/logo2.png?ex=6719f994&is=6718a814&hm=7f121bbd566b264cc14468eba486fa446d4b28e1b93590f21e0f9a300b6032e0&=&format=webp&quality=lossless"/>
        <span className='home'> Главная VL.ru</span>
      </a>
      <div className='line'></div>
 <div className='SidebarButtons'>
      <div className='login'>
        <a href="https://example.com">
          <img className='fullname' src="https://media.discordapp.net/attachments/1135282998313484450/1298553380154642432/login.png?ex=6719fb93&is=6718aa13&hm=1d50cb067cbfa1bd998e90596fc3bcb014265ecb72ce0c1b7ee6a2fd9f3117b6&=&format=webp&quality=lossless&width=324&height=325"/>
          <span>Райан Гослинг</span>
        </a>
      </div>

      <div className='tickets'>
        <a href="https://example.com">
          <img className='tickets-vlru' src="https://media.discordapp.net/attachments/1135282998313484450/1298553400199348255/ticket.png?ex=6719fb98&is=6718aa18&hm=255391edd0e19b1f761a165f8fae6b6f4571572edf63bd1796fd453113e06b9e&=&format=webp&quality=lossless&width=325&height=325"/>
          <span>Билеты VL.ru</span>
        </a>
      </div>

      <div className='selected'>
        <a href="https://example.com">
          <img className='favourite' src="https://media.discordapp.net/attachments/1135282998313484450/1298553412278812745/heart.png?ex=6719fb9b&is=6718aa1b&hm=e899101d4a176dd6e7e2108ee6363146f24068edad89c48585b44ef93e4c627a&=&format=webp&quality=lossless&width=325&height=325"/>
          <span>Избранное</span>
        </a>
        <div className='line2'></div>
      </div>

    <div className='location'>
    <a href="https://example.com">
      <img className='city' src="https://media.discordapp.net/attachments/1135282998313484450/1298553438652727357/map.png?ex=6719fba1&is=6718aa21&hm=5d151d6b99d297917243bb1b1bf17b5d574e38cac95ce249ba5a901ae50c96c8&=&format=webp&quality=lossless&width=325&height=325"/>
      <span>Владивосток</span>
    </a>
    <div className='line2'></div>
  </div>

  <div className='log-out'>
    <a href="https://example.com">
      <img className='logout' src="https://media.discordapp.net/attachments/1135282998313484450/1298553453316018176/logout.png?ex=6719fba5&is=6718aa25&hm=622f50694ff6c711100a17d807e2f1c8cd95fb40aee6e6392dd00de1e4500f21&=&format=webp&quality=lossless&width=325&height=325"/>
      <span>Выход</span>
    </a>
    </div>
    <div className='line2'></div>
  </div>
  </div>
</div>
  );
};

export default Sidebar;