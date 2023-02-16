import CSSModules from 'react-css-modules';
import style from './style.module.scss';

function Rate({ price, speed, color, isSelect }) {

    let styleCard = color;


    if (isSelect) {
        styleCard += 'cardSelected';
    }

    return (


        <div styleName={styleCard}>
            <div styleName="cardName">Безлимитный {price}</div>
            <div styleName="cardPrice">{price} руб/мес</div>
            <div styleName="cardSpeed">до {speed} Мбит/сек</div>
            <div styleName="cardText">Объем включенного трафика не ограничен</div>
        </div >
    )
}


export default CSSModules(Rate, style);
