import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';
import errorAvatar from '../images/avatar-error.jpg';
import { useState } from 'react';
import { api, defaultUser } from '../utils/constants';
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
  const [currentUser, setCurrentUser] = useState(defaultUser);
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

  React.useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((error) => {
        const errorUser = {
          avatar: errorAvatar,
          name: error.status,
          about: error.statusText
        };
        setCurrentUser(errorUser);
      });
  },[]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
