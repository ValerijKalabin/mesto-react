import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
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
      isOpen={isOpen}
      onClose={onClose}
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
