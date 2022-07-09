import React from 'react';

//Импорт "заготовки" карточки
import Card from './Card';
//Импорт экземпляра класса Api (работа с сервером)
import { api } from '../utils/api';

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick
}) {

    //Переменные состояния (стейта)
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getInfoFromServer(), api.getCardsFromServer()])
            .then(([userData, initialCards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(initialCards);
            })
            .catch((err) => console.log(err))
    }, []); //[] - массив с переменными, изменение хотя бы 1 из которых должно провоцировать выполнение хука (зависимости)
            //У нас массив пустой, следовательно, такой эффект будет вызван всего один раз (монтирование)

    //Вынесли маппинг из JSX разметки в сам компонент для повышения читабельности кода
    const cardsElements = cards.map(card =>
        <li key={card._id}>
            <Card
                card={card}
                cards={cards}
                nameCard={card.name}
                likesCard={card.likes}
                linkCard={card.link}
                key={card._id}
                onSelectedCardClick={onCardClick}
            />
        </li>
    );

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__wrapper">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар профиля пользователя." />
                    <button className="profile__icon-edit" type="button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__local-info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__button profile__button_purpose_edit" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__characteristic">{userDescription}</p>
                </div>
                <button className="profile__button profile__button_purpose_add" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="photogrid">
                <ul className="photogrid__container">
                    {cardsElements}
                </ul>
            </section>
        </main>
    );
}

export default Main;