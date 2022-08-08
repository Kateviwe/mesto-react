import React from 'react';

import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({
    isOpen,
    onClose,
    onUpdateAvatar
}) {
    //Создадим реф, чтобы получить прямой доступ к DOM-элементу инпута и его значению
    const avatarRef = React.useRef();

    function clearInputValue() {
        //Сначала закроем все попапы, только после этого очистим инпут формы
        onClose();
        avatarRef.current.value = '';
    }
    
    function handleSubmit(e) {
        //Предотвращаем стандартное поведение браузера: переход по адресу формы
        e.preventDefault();

        // Передаём значение рефа во внешний обработчик
        onUpdateAvatar({
            avatar: avatarRef.current.value
        });

        clearInputValue();
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            functionPopup="change-avatar"
            textButton="Сохранить"
            flag={true}
            isOpen={isOpen}
            onClose={clearInputValue}
            onSubmit={handleSubmit}
        >
            <fieldset className="popup__user-info">
                <input
                    id="avatar-input"
                    ref={avatarRef}
                    className="popup__text popup__text_purpose_change-avatar"
                    type="url"
                    name="avatar"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__text-error avatar-input-error">Необходимо заполнить данное поле.</span>
            </fieldset>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;



