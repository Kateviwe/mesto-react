function ImagePopup(props) {
    return (
        <div className={`popup viewing-popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__bag">
                <button className="popup__exit popup__exit_purpose_view" type="button" onClick={props.onClose}></button>
                <img className="popup__image" src={props.card.link} alt={props.card.name} />
                <h2 className="popup__title">{props.card.name}</h2>
            </div>
            <div className="popup__overlay popup__overlay_purpose_view"></div> 
        </div>
    );
}

export default ImagePopup;