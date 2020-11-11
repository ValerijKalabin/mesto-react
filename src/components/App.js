import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
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

  function handleUpdateAvatar(avatar) {
    api.saveUserAvatar(avatar)
      .then((profile) => {
        setCurrentUser(profile);
        closeAllPopups();
      })
      .catch ((error) => {
        alert(`Ошибка записи данных пользователя ${error.status}`);
      });
  }

  function handleUpdateUser(profile) {
    api.saveUserInfo(profile)
      .then((profile) => {
        setCurrentUser(profile);
        closeAllPopups();
      })
      .catch ((error) => {
        alert(`Ошибка записи данных пользователя ${error.status}`);
      });
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
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
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
