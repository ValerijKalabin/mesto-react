import React from 'react';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, submitButtonCaption }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [username, setUsername] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [isValidUsername, setValidityUsername] = useState(false);

  const [description, setDescription] = useState('');
  const [errorDescription, setErrorDescription] = useState('');
  const [isValidDescription, setValidityDescription] = useState(false);

  function handleChangeUsername(event) {
    setUsername(event.target.value);
    setErrorUsername(event.target.validationMessage);
    setValidityUsername(event.target.validity.valid);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
    setErrorDescription(event.target.validationMessage);
    setValidityDescription(event.target.validity.valid);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({ username, description });
  }

  React.useEffect(() => {
    if(isOpen) {
      setUsername(currentUser.name);
      setErrorUsername('');
      setValidityUsername(true);
      setDescription(currentUser.about);
      setErrorDescription('');
      setValidityDescription(true);
    }
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      submitButtonCaption={submitButtonCaption}
      isDisabledSubmitButton={!isValidUsername || !isValidDescription}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input ${errorUsername && 'popup__input_type_error'}`}
        type="text"
        name="username"
        value={username}
        onChange={handleChangeUsername}
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
      />
      <span className={`popup__error ${errorUsername && 'popup__error_visible'}`}>{errorUsername}</span>
      <input
        className={`popup__input ${errorDescription && 'popup__input_type_error'}`}
        type="text"
        name="description"
        value={description}
        onChange={handleChangeDescription}
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
      />
      <span className={`popup__error ${errorDescription && 'popup__error_visible'}`}>{errorDescription}</span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
