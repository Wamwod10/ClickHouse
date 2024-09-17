import React, { useEffect, useState } from 'react';
import './card.scss';
import { FaArrowRight } from 'react-icons/fa';
import CardBox from './CardBox';

const Card = () => {
    const [visible, setVisible] = useState(4);
    const [loading, setLoading] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showAll, setShowAll] = useState(false); // State to handle show/hide

    const productObject = [
        { img: '3.png', name: 'Диваны' },
        { img: '4.png', name: 'Спальная' },
        { img: '5.png', name: 'Кухня' },
        { img: '6.png', name: 'Для сада' },
        { img: '7.png', name: 'Мебель' },
        { img: '8.png', name: 'Гигиена' },
        { img: '9.png', name: 'Товары для отдыха' },
        { img: '10.png', name: 'Зеркала' },
        { img: '11.png', name: 'Хранение и порядок' },
        { img: '12.png', name: 'Кухня и бытовая тех..' },
    ];

    let windowWidthCurrentSize = windowWidth < 521;
    let lengthObj = productObject.length;
    let newObject = showAll || !windowWidthCurrentSize ? productObject : productObject.slice(0, visible);

    const handleToggleVisibility = () => {
        setLoading(true);
        setTimeout(() => {
            setShowAll(!showAll); // Toggle the state
            if (showAll) {
                setVisible(4); // Reset to initial visible count when closing
            } else {
                setVisible(lengthObj); // Show all boxes when opening
            }
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="card">
            <div className="container">
                <div className="card__title-box">
                    <h2 className="card__title">Популярные категории</h2>
                    <a href="#" className="card__main-link">
                        Все категории <FaArrowRight className="card__title-icon" />
                    </a>
                </div>

                <div className="card__box">
                    {newObject.map((item, i) => (
                        <CardBox key={i} img={item.img} name={item.name} />
                    ))}
                </div>

                {windowWidthCurrentSize &&
                    <>
                        <button className='card__button' onClick={handleToggleVisibility}>
                            {showAll ? 'закрывать' : 'более'}
                        </button>
                        {loading && <div className='card__load'>загрузка...</div>}
                    </>
                }
            </div>
        </div>
    );
};

export default Card;
