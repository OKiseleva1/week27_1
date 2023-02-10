import React from 'react';
import style from './style.module.scss';

export default function Rate(props) {
    return (
        <div className={style.rate}>
            <div className={style.cardName}>Безлимитный {props.price}</div>
            <div className={style.cardPrice}>{props.price} руб/мес</div>
            <div className={style.cardSpeed}>до {props.speed} Мбит/сек</div>
            <div className={style.cardText}>Объем включенного трафика не ограничен</div>
        </div >
    )
}


