import React from 'react';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddPlace({ name, link });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      submitButtonCaption="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        type="text"
        name="placename"
        value={name}
        onChange={handleChangeName}
        placeholder="Название"
        required
        maxLength="30"
      />
      <span className="popup__error" />
      <input
        className="popup__input"
        type="url"
        name="placelink"
        value={link}
        onChange={handleChangeLink}
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
