function PopupWithForm(props) {
  return (
    <div className={`popup popup_task_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} action="/" method="POST" novalidate>
          {props.children}
          <button className="popup__button" type="submit">{props.button}</button>
        </form>
        <button className="popup__icon-close" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
