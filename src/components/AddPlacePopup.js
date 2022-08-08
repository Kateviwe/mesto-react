import React from 'react';

import PopupWithForm from './PopupWithForm';

function AddPlacePopup({
    isOpen,
    onClose,
    onAddPlace
}) {

    const [newCardName, setNewCardName] = React.useState('');
    const [newCardLink, setNewCardLink] = React.useState('');

    function handleNameNewCard(e) {
        setNewCardName(e.target.value);
    }
    function handleLinkNewCard(e) {
        setNewCardLink(e.target.value);
    }

    function handleSubmit(e) {
        //Предотвращаем стандартное поведение браузера: переход по адресу формы
        e.preventDefault();

        onAddPlace({
            nameCard: newCardName,
            linkCard: newCardLink
        });
    }

    React.useEffect(() => {
        if (!isOpen) {
            setNewCardName('');
            setNewCardLink('');
        }
    }, [isOpen]);
    
    return (
        <PopupWithForm
            name="adding"
            title="Новое место"
            functionPopup="add"
            textButton="Создать"
            flag={false}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <fieldset className="popup__user-info">
                <input
                    id="title-input"
                    value={newCardName}
                    onChange={handleNameNewCard}
                    className="popup__text popup__text_purpose_title"
                    type="text"
                    name="title"
                    placeholder="Название"
                    required 
                    minLength="2"
                    maxLength="30"
                />
                <span className="popup__text-error title-input-error">Необходимо заполнить данное поле.</span>
                <input
                    id="src-input"
                    value={newCardLink}
                    onChange={handleLinkNewCard}
                    className="popup__text popup__text_purpose_src"
                    type="url"
                    name="src"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__text-error src-input-error">Необходимо заполнить данное поле.</span>
            </fieldset>
        </PopupWithForm>
    );
}

export default AddPlacePopup;