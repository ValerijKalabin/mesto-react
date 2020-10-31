import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import {
  childrenAvatarPopup,
  childrenProfilePopup,
  childrenPlacePopup
} from '../utils/children';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isShowImagePopupOpen, setIsShowImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(element) {
    setSelectedCard(element);
    setIsShowImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsShowImagePopupOpen(false);
  }

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
          isOpen={isShowImagePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          submitButtonCaption="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          {childrenAvatarPopup}
        </PopupWithForm>
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          submitButtonCaption="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          {childrenProfilePopup}
        </PopupWithForm>
        <PopupWithForm
          name="place"
          title="Новое место"
          submitButtonCaption="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          {childrenPlacePopup}
        </PopupWithForm>
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
