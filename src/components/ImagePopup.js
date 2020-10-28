function ImagePopup(props) {
  return (
    <div className={`popup popup_task_picture ${props.card && 'popup_opened'}`}>
      <div className="popup__image-container">
        <img className="popup__image" src={props.card.link} />
        <h2 className="popup__image-title">{props.card.name}</h2>
        <button className="popup__icon-close popup__icon-close_container_image" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
