import React, { useRef, useState } from 'react';
import './header.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__box">
                    <h2 className="header__title">Мебель на любой вкус!</h2>
                    <ul className="header__list">
                        <li className="header__item"><a href="" className="header__link">Худи, чашки для горячего чая и термосы </a></li>
                        <li className="header__item"><a href="" className="header__link">Eлочные игрушки, брелочки</a></li>
                        <li className="header__item"><a href="" className="header__link">Начало списка вещей, которые можно </a></li>
                    </ul>
                    <a href="" className="header__main-link">Перейти в каталог</a>
                    <a href="" className="header__main-link2">Внести список артикулов</a>
                </div>
                <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }} loop={true} spaceBetween={50} className="mySwiper header__swipe">
                    <SwiperSlide><img className='header__img' src="2.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='header__img' src="33.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='header__img' src="34.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='header__img' src="35.webp" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Header