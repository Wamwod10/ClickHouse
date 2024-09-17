import React, { useEffect, useState } from 'react';
import './categoryBox.scss';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

const CategoryBox = ({ item }) => {
    const [activeButton, setActiveButton] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleBoxClick = () => {
        setActiveButton(!activeButton);
    };

    const handleCartClick = (event) => {
        event.stopPropagation();
        // Ваш код для обработки добавления в корзину
    };

    const handleIncrease = (event) => {
        event.stopPropagation();
        if (quantity < 10) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const handleDecrease = (event) => {
        event.stopPropagation();
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    };


    return (
        <div className={`category__box-div ${activeButton ? 'active' : ''}`} onClick={handleBoxClick}>
            <img src={item.img} alt="" className="category__box-img" />
            <div className="category__txt-box">
                {/* <p className="category__sale" ></p> */}
                <h2 className="category__title" data-sale={item.sale}>{item.title}</h2>

                {/* <p className="category__saleprice">{item.saleprice}</p> */}
                <p className="category__price" data-original-price={item.saleprice}>{item.price}</p>

                {activeButton && (
                    <div className="category__div" onClick={handleCartClick} >
                        <div className="category__value-box" onClick={handleCartClick}>
                            <p className="category__value">{quantity} шт.</p>
                            <div className="category__icon-box">
                                <FaChevronUp
                                    className='category__icon'
                                    onClick={handleIncrease}
                                />

                                <FaChevronDown
                                    className='category__icon'
                                    onClick={handleDecrease}
                                />
                            </div>
                        </div>
                        <button href="#" className="category__shop" onClick={handleCartClick}>
                            <MdAddShoppingCart />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CategoryBox;
