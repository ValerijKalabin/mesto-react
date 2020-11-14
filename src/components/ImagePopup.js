function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_task_picture ${isOpen && 'popup_opened'}`} onClick={onClose}>
      <div className="popup__image-container">
        <img className="popup__image" src={card.link} alt={card.name} />
        <h2 className="popup__image-title">{card.name}</h2>
        <button className="popup__icon-close popup__icon-close_container_image" type="button" onClick={onClose} />
      </div>
    </div>
  );
}

export default ImagePopup;
