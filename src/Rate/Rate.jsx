import { useState } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.module.scss';




function Rate({ price, speed, color }) {

    const [isSelect, onSetSelect] = useState(false);

    let styleCard = color;
    let cardSelectedStyle = styleCard + 'cardSelected';

    if (isSelect) {
        styleCard = cardSelectedStyle;
    }


    function onClick() {
        onSetSelect(!isSelect);
    }


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
