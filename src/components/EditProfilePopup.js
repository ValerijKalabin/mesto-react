import React from 'react';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [username, setUserName] = useState('');
  const [description, setDescription] = useState('');

  function handleChangeUserName(event) {
    setUserName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({ username, description });
  }

  React.useEffect(() => {
    setUserName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      submitButtonCaption="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        type="text"
        name="username"
        value={username}
        onChange={handleChangeUserName}
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__error" />
      <input
        className="popup__input"
        type="text"
        name="description"
        value={description}
        onChange={handleChangeDescription}
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
