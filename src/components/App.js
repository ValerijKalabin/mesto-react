import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(element) {
    setSelectedCard(element);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          submitButtonCaption="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={(
            <>
              <input class="popup__input" type="url" name="avatarlink" placeholder="Ссылка на изображение" required />
              <span class="popup__error" />
            </>
          )}
        />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          submitButtonCaption="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={(
            <>
              <input class="popup__input" type="text" name="username" placeholder="Имя" required minlength="2" maxlength="40" />
              <span class="popup__error" />
              <input class="popup__input" type="text" name="description" placeholder="О себе" required minlength="2" maxlength="200" />
              <span class="popup__error" />
            </>
          )}
        />
        <PopupWithForm
          name="place"
          title="Новое место"
          submitButtonCaption="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={(
            <>
              <input class="popup__input" type="text" name="placename" placeholder="Название" required maxlength="30" />
              <span class="popup__error" />
              <input class="popup__input" type="url" name="placelink" placeholder="Ссылка на картинку" required />
              <span class="popup__error" />
            </>
          )}
        />
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          submitButtonCaption="Да"
          isOpen={false}
        />
      </div>
    </div>
  );
}

export default App;
