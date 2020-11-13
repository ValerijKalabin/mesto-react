import React from 'react';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [isValidName, setValidityName] = useState(false);

  const [link, setLink] = useState('');
  const [errorLink, setErrorLink] = useState('');
  const [isValidLink, setValidityLink] = useState(false);

  function handleChangeName(event) {
    setName(event.target.value);
    setErrorName(event.target.validationMessage);
    setValidityName(event.target.validity.valid);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
    setErrorLink(event.target.validationMessage);
    setValidityLink(event.target.validity.valid);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({ name, link });
  }

  React.useEffect(() => {
    if(isOpen) {
      setName('');
      setErrorName('');
      setValidityName(false);
      setLink('');
      setErrorLink('');
      setValidityLink(false);
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      submitButtonCaption="Создать"
      isDisabledSubmitButton={!isValidName || !isValidLink}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input ${errorName && 'popup__input_type_error'}`}
        type="text"
        name="placename"
        value={name}
        onChange={handleChangeName}
        placeholder="Название"
        required
        maxLength="30"
      />
      <span className={`popup__error ${errorName && 'popup__error_visible'}`}>{errorName}</span>
      <input
        className={`popup__input ${errorLink && 'popup__input_type_error'}`}
        type="url"
        name="placelink"
        value={link}
        onChange={handleChangeLink}
        placeholder="Ссылка на картинку"
        required
      />
      <span className={`popup__error ${errorLink && 'popup__error_visible'}`}>{errorLink}</span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
