import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="./logo.svg" alt="Национальный банк Республики Беларусь"/>
        </div>
      </header>
    </div>
  );
};

export default Header;