import React from 'react';
import './cardBox.scss';

const CardBox = ({ img, name }) => {
    return (
        <div className="card__box-div">
            <img src={`/${img}`} className="card__box-img" alt={name} />
            <h2 className="card__box-title">{name}</h2>
        </div>
    );
};

export default CardBox;
