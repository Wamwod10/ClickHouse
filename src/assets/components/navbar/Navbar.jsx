import './navbar.scss'
import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";


const Navbar = () => {
  // const rekMenu = document.querySelector(".reklem__button");
  // const openMenu = document.querySelector(".reklem__list");
  
  // rekMenu.addEventListener('click', () => {
  //   rekMenu.classList.toggle('active');
  //   openMenu.classList.toggle('active');
  // })
  
  const [isActive, setIsActive] = useState(false);

  // Klik hodisasi
  const handleClick = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div className="navbar">
      <div className={`${isActive ? "active" : ""} navbar__box`}>
        <div className="container">
          <a href=""><img className="navbar__logo" src="1.svg" alt="" /></a>
          <ul className="navbar__list">
            <li className="navbar__item"><a href="" className="navbar__link">Каталог</a></li>
            <li className="navbar__item"><a href="" className="navbar__link">Доставка</a></li>
            <li className="navbar__item"><a href="" className="navbar__link">Условия</a></li>
            <li className="navbar__item"><a href="" className="navbar__link">Контакты</a></li>
          </ul>
          <div className="navbar__numb-box">
            <div className="navbar__txt-box">
              <p className="navbar__numb-txt">+ 375 736 463 64 72</p>
              <span className="navbar__span">/</span>
              <p className="navbar__numb-txt"> + 375 736 463 64 72</p>
            </div>
            <a href="tel:+3757364636472" className="navbar__numb-link">Заказать звонок</a>
          </div>
        </div>
      </div>
      <div className="reklem">
        <div className="container">
          <div className="reklem__box">
            <button className={`reklem__button reklem__menu-link ${isActive ? 'active' : ''}`} onClick={handleClick}><HiOutlineMenuAlt1 /></button>
            <ul  className={`reklem__list ${isActive ? 'active' : ''}`}>
              <li><a href="" className="reklem__menu-links">Каталог</a></li>
              <div className="reklem__line"></div>
              <li><a href="" className="reklem__menu-links">Доставка</a></li>
              <div className="reklem__line"></div>
              <li><a href="" className="reklem__menu-links">Условия</a></li>
              <div className="reklem__line"></div>
              <li><a href="" className="reklem__menu-links">Контакты</a></li>
            </ul>
            <form action="" className="reklem__form">
              <input type="text" className="reklem__input" placeholder='Что желаете найти?' />
              <a className='reklem__menu-link reklem__search' href=""><CiSearch /></a>
            </form>
            <a href="" className="reklem__link">Вставить список покупок</a>
            <div className="reklem__box-icon">
              <a className='reklem__menu-link reklem__icon' href=""><IoIosStarOutline /></a>
              <a className='reklem__menu-link reklem__icon' href=""><FiShoppingCart /></a>
              <a className='reklem__menu-link reklem__icon' href=""><FaRegUser /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar