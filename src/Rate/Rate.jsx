import { useState } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.module.scss';




function Rate({ price, speed, color, isSelect, onSetSelect }) {

    let styleCard = color;

    if (isSelect) {
        styleCard += 'cardSelected';
    }


    function onClick() {
        onSetSelect(styleCard += 'cardSelected');
    }
    const stateArr = useState(styleCard);
    styleCard = stateArr[0];
    onSetSelect = stateArr[1];



    return (
        <div styleName={styleCard} onClick={onClick}>
            <div styleName="cardName">Безлимитный {price}</div>
            <div styleName="cardPrice">{price} руб/мес</div>
            <div styleName="cardSpeed">до {speed} Мбит/сек</div>
            <div styleName="cardText">Объем включенного трафика не ограничен</div>
        </div >
    )
}


export default CSSModules(Rate, style);
