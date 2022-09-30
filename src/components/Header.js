import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../css/Style.module.css';

function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.h1}>Math Magicians</h1>
      <section className={style.pageLinks}>
        <NavLink to="/" className={style.navLink}>
          Home
        </NavLink>
        |
        <NavLink to="/calculator" className={style.navLink}>
          Calculator
        </NavLink>
        |
        <NavLink to="/Quote" className={style.navLink}>
          Quote
        </NavLink>
      </section>
    </div>
  );
}

export default Header;
