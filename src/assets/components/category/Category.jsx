import React from 'react'
import './category.scss'
import { FaArrowRight } from 'react-icons/fa';
import CategoryBox from './CategoryBox';

const objectProducts = [
    {
        img: '13.png',
        sale: "12%",
        title: "VINTER 2020 ВИНТЕР 2020 Шкаф платяной 3-дверный 117x190 см",
        saleprice: '67 763,23 Br',
        price: "62 392,23 Br"
    }, {
        img: '14.png',
        sale: "12%",
        title: "GLASIG ГЛАСИГ Шкаф платяной 3-дверный 117x190 см",
        saleprice: '7 763,23 Br',
        price: "2 792,37 Br"
    }, {
        img: '15.png',
        sale: "12%",
        title: "STABBIG СТАБИГ Шкаф платяной 3-дверный 117x190 см",
        saleprice: '763,23 Br',
        price: "392,3 Br"

    }, {
        img: '16.png',
        sale: "12%",
        title: "PÄRLBAND ПЭРЛЬБАНД Шкаф платяной 3-дверный 117x190 см",
        saleprice: '63,23 Br',
        price: "55,53 Br"
    }
];

const objectProducts1 = [
    {
        img: '17.png',
        title: 'BRIMNES БРИМНЭС Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '52 392 Br',
    }, {
        img: '18.png',
        title: 'DEKORERA ДЕКОРЕРА Шкаф платяной 3-дверный 117x190',
        saleprice: '',
        price: '292 Br',
    }, {
        img: '19.png',
        title: 'FULLTALIG ФУЛЛТАЛИГ Шкаф платяной 3-дверный 117x190 см',
        saleprice: '763,23 Br',
        price: '39,3 Br',
    }, {
        img: '20.png',
        title: 'GLASIG ГЛАСИГ Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '75,8 Br',
    }, {
        img: '21.png',
        title: 'KINNEN КИННЕН Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '682,83 Br',
    }, {
        img: '22.png',
        title: 'BORRBY БОРБЮ Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '79,37 Br',
    }, {
        img: '23.png',
        title: 'SKURUP СКУРУП Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '882,33 Br',
    }, {
        img: '24.png',
        title: 'MOSSRUTA МОССРУТА Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '905,37 Br',
    }, {
        img: '25.png',
        title: 'VINTER 2020 ВИНТЕР 2020 Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '5 692,23 Br',
    }, {
        img: '26.png',
        title: 'GLASIG ГЛАСИГ Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '2 792,37 Br',
    }, {
        img: '27.png',
        title: 'STABBIG СТАБИГ Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '366,53 Br',
    }, {
        img: '28.png',
        title: 'PÄRLBAND ПЭРЛЬБАНД Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '25,42 Br',
    },
]

const objectProducts2 = [
    {
        img: '17.png',
        title: 'BRIMNES БРИМНЭС Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '52 392 Br',
    }, {
        img: '18.png',
        title: 'DEKORERA ДЕКОРЕРА Шкаф платяной 3-дверный 117x190',
        saleprice: '',
        price: '292 Br',
    }, {
        img: '19.png',
        title: 'FULLTALIG ФУЛЛТАЛИГ Шкаф платяной 3-дверный 117x190 см',
        saleprice: '763,23 Br',
        price: '39,3 Br',
    }, {
        img: '20.png',
        title: 'GLASIG ГЛАСИГ Шкаф платяной 3-дверный 117x190 см',
        saleprice: '',
        price: '75,8 Br',
    },
];


const Category = () => {
    return (
        <div className="category">
            <div className="container">
                <div className="card__title-box">
                    <h2 className="card__title category__title-first">Скидки <span>%</span></h2>
                    <a href="#" className="card__main-link">
                        Все товары в категории <FaArrowRight className="card__title-icon" />
                    </a>
                </div>

                <div className="category__box">
                    {objectProducts.map((item, index) => (
                        <CategoryBox item={item} key={index} />
                    ))}
                </div>

                <div className="card__title-box">
                    <h2 className="card__title category__title-first">Товары в наличии</h2>
                    <a href="#" className="card__main-link">
                        Все товары в категории <FaArrowRight className="card__title-icon" />
                    </a>
                </div>

                <div className="category__box">
                    {objectProducts1.map((item, index) => (
                        <CategoryBox item={item} key={index} />
                    ))}
                </div>

                <div className="card__title-box">
                    <h2 className="card__title category__title-first">Популярное</h2>
                    <a href="#" className="card__main-link">
                        Все товары в категории <FaArrowRight className="card__title-icon" />
                    </a>
                </div>

                <div className="category__box">
                    {objectProducts2.map((item, index) => (
                        <CategoryBox item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category