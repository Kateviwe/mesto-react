import React from 'react';

function Card({
    card,
    cards,
    nameCard,
    likesCard,
    linkCard,
    onSelectedCardClick
}) {
    
    //При клике на карточку она должна открыться на "весь" экран (нам надо знать каую карточку открывать)
    function handleClick() {
        onSelectedCardClick(card);
    }

    return (
        <div className="photogrid__item">
            <button className="photogrid__urn" type="button"></button>
            <img className="photogrid__image" src={linkCard} alt={nameCard} onClick={handleClick} />
            <div className="photogrid__sign">
                <h2 className="photogrid__heading">{nameCard}</h2>
                <div className="photogrid__like-section">
                    <button className="photogrid__like" type="button"></button>
                    <h3 className="photogrid__like-number">{likesCard.length}</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;