import React from 'react';

import PopupWithForm from './PopupWithForm';

//Импорт объекта контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({
    isOpen,
    onClose,
    onUpdateUser
}) {
    
    //Добавим управляемые компоненты (элементы формы), связав их со стейт-переменными name и description
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    // Обработчики изменения инпутов обновляют стейты
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }
    //Что будет происходить при отправке формы PopupWithForm
    function handleSubmit(e) {
        //Предотвращаем стандартное поведение браузера: переход по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            characteristic: description
        });
    }

    //Подпишемся на контекст CurrentUserContext
    const currentUserInfoContext = React.useContext(CurrentUserContext);
    //Создадим эффект, который будет обновлять переменные состояния name и description при изменении контекста
    React.useEffect(() => {
        if (isOpen) {
            setName(currentUserInfoContext.name);
            setDescription(currentUserInfoContext.about);
        }
    }, [currentUserInfoContext, isOpen]); //[] - массив с переменными, изменение хотя бы 1 из которых должно провоцировать выполнение хука (зависимости)

    return (
        <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            functionPopup="edit"
            textButton="Сохранить"
            flag={false}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <fieldset className="popup__user-info">
                <input
                    id="name-input"
                    value={name}
                    onChange={handleNameChange}
                    className="popup__text popup__text_purpose_name"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    required
                    minLength="2"
                    maxLength="40"
                />
                <span className="popup__text-error name-input-error">Необходимо заполнить данное поле.</span>
                <input
                    id="characteristic-input"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="popup__text popup__text_purpose_characteristic"
                    type="text"
                    name="characteristic"
                    placeholder="Характеристика"
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span className="popup__text-error characteristic-input-error">Необходимо заполнить данное поле.</span>
            </fieldset>
        </PopupWithForm>
    );
}

export default EditProfilePopup;