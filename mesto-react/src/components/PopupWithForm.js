//Компонент для объединения общей разметки у попапов
function PopupWithForm(props) {
    return (
        <div className={`popup ${props.name}-popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className={`popup__exit popup__exit_purpose_${props.function}`} type="button" onClick={props.onClose}></button>
                {/* name в форме: в работе mesto (js) и в данной работе (react) не совпадают (поменяла) */}
                <form className={`popup__inner popup__inner_purpose_${props.function}`} name={props.name} noValidate>
                    <h2 className={`popup__heading ${props.flag ? `popup__heading_purpose_${props.function}` : ''}`}>{props.title}</h2>
                    {props.children}
                    <button className={`popup__button popup__button_purpose_${props.function}`} type="submit">{props.textButton}</button>
                </form>
                <div className={`popup__overlay popup__overlay_purpose_${props.function}`}></div> 
            </div>
        </div>
    );
}

export default PopupWithForm;