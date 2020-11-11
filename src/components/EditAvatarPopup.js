import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  React.useEffect(() => {
    inputRef.current.value = '';
  });

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitButtonCaption="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        type="url"
        name="avatarlink"
        placeholder="Ссылка на изображение"
        ref={inputRef}
        required
      />
      <span className="popup__error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
