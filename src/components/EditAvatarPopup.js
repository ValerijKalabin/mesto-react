import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const refInput = React.useRef();
  const [errorInput, setErrorInput] = React.useState('');
  const [isValidInput, setValidityInput] = React.useState(false);

  function handleChange() {
    setErrorInput(refInput.current.validationMessage);
    setValidityInput(refInput.current.validity.valid);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: refInput.current.value
    });
  }

  React.useEffect(() => {
    if(isOpen) {
      refInput.current.value = '';
      setErrorInput('');
      setValidityInput(false);
    }
  },  [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitButtonCaption="Сохранить"
      isDisabledSubmitButton={!isValidInput}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input ${errorInput && 'popup__input_type_error'}`}
        type="url"
        name="avatarlink"
        placeholder="Ссылка на изображение"
        ref={refInput}
        required
        onChange={handleChange}
      />
      <span className={`popup__error ${errorInput && 'popup__error_visible'}`}>{errorInput}</span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
