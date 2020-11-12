function PopupWithForm({
  name,
  title,
  submitButtonCaption,
  isOpen,
  onClose,
  onSubmit,
  children
}) {
  return (
    <div className={`popup popup_task_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} action="/" method="POST" noValidate onSubmit={onSubmit}>
          {children}
          <button className="popup__button" type="submit">{submitButtonCaption}</button>
        </form>
        <button className="popup__icon-close" type="button" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
