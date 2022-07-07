import React from 'react';

function Card(props) {

    //При клике на карточку она должна открыться на "весь" экран (нам надо знать каую карточку открывать)
    function handleClick() {
        props.onSelectedCardClick(props.card);
    }

    return (
        <li className="photogrid__item">
            <button className="photogrid__urn" type="button"></button>
            <img className="photogrid__image" src={props.linkCard} alt={props.nameCard} onClick={handleClick} />
            <div className="photogrid__sign">
                <h2 className="photogrid__heading">{props.nameCard}</h2>
                <div className="photogrid__like-section">
                    <button className="photogrid__like" type="button"></button>
                    <h3 className="photogrid__like-number">{props.likesCard.length}</h3>
                </div>
            </div>
        </li>
    );
}

export default Card;