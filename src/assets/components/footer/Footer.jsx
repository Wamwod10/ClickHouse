import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <a href=""><img className="navbar__logo" src="1.svg" alt="" /></a>
                <div className="footer__box">
                    <div className="footer__box-div">
                        <h2 className="footer__title">Информация</h2>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="" className="footer__link">Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь. </a></li>
                            <li className="footer__item"><a href="" className="footer__link">УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299
                            </a></li>
                            <li className="footer__item"><a href="" className="footer__link">Политика конфиденциальности</a></li>
                        </ul>
                    </div>
                    <div className="footer__box-div">
                        <h2 className="footer__title">Меню</h2>
                        <ul className="footer__list footer__list-sec">
                            <li className="footer__item"><a href="" className="footer__link">Главная | Каталог | Товары наличии</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Скидки | Популярное | Вдохновение</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Доставка | Услуги | Условия</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Контакты | Вставить | Cписок покупок</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Корзина | Личный кабинет | Избранное</a></li>
                        </ul>
                    </div>
                    <div className="footer__box-div">
                        <h2 className="footer__title">Контакты</h2>
                        <ul className="footer__list footer__list-sec">
                            <li className="footer__item"><a href="" className="footer__link">г.Минск</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Ул. Первомайская, Д. 1, Кв. 43</a></li>
                            <li className="footer__item"><a href="" className="footer__link">+ 375 434 847 28 84</a></li>
                            <li className="footer__item"><a href="" className="footer__link">+ 375 448 473 09 48</a></li>
                            <li className="footer__item"><a href="" className="footer__link">ikeaekspress@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="footer__box-div">
                        <a href="" className="footer__insta-logo"><img src="33.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer