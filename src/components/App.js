import React from 'react';

//Блоки(части) страницы
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//Работа с попапами
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    //Хуки, отвечающие за видимость 4 попапов
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    //Стейт-переменная, отвечающая за просматриваемую карточку
    const [selectedCard, setSelectedCard] = React.useState(null);
    //В случае с объектами null в качестве начального состояния допускается, а selectedCard у нас - объект
    //Тогда состояние открытого imagePopup можно вычислять как selectedCard !== null

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    return (
        <div className="body">
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer />
                <PopupWithForm
                    name="profile"
                    title="Редактировать профиль"
                    functionPopup="edit"
                    textButton="Сохранить"
                    flag={false}
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                >
                    <fieldset className="popup__user-info">
                        <input id="name-input" className="popup__text popup__text_purpose_name" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
                        <span className="popup__text-error name-input-error">Необходимо заполнить данное поле.</span>
                        <input id="characteristic-input" className="popup__text popup__text_purpose_characteristic" type="text" name="characteristic" placeholder="Характеристика" required minLength="2" maxLength="200" />
                        <span className="popup__text-error characteristic-input-error">Необходимо заполнить данное поле.</span>
                    </fieldset>
                </PopupWithForm>
                <PopupWithForm
                    name="adding"
                    title="Новое место"
                    functionPopup="add"
                    textButton="Создать"
                    flag={false}
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <fieldset className="popup__user-info">
                        <input id="title-input" className="popup__text popup__text_purpose_title" type="text" name="title" placeholder="Название" required minLength="2" maxLength="30" />
                        <span className="popup__text-error title-input-error">Необходимо заполнить данное поле.</span>
                        <input id="src-input" className="popup__text popup__text_purpose_src" type="url" name="src" placeholder="Ссылка на картинку" required />
                        <span className="popup__text-error src-input-error">Необходимо заполнить данное поле.</span>
                    </fieldset>
                </PopupWithForm>
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                <PopupWithForm 
                    name="delete-confirmation"
                    title="Вы уверены?"
                    functionPopup="confirm"
                    textButton="Да"
                    flag={true}
                />
                <PopupWithForm
                    name="avatar"
                    title="Обновить аватар"
                    functionPopup="change-avatar"
                    textButton="Сохранить"
                    flag={true}
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                >
                    <fieldset className="popup__user-info">
                        <input id="avatar-input" className="popup__text popup__text_purpose_change-avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                        <span className="popup__text-error avatar-input-error">Необходимо заполнить данное поле.</span>
                    </fieldset>
                </PopupWithForm>
            </div>
        </div>
    );
}

export default App;
