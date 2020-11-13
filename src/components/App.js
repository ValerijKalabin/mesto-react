import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import errorAvatar from '../images/avatar-error.jpg';
import { useState } from 'react';
import { api, defaultUser } from '../utils/constants';

function App() {
  const [avatarSubmitButtonCaption, setAvatarSubmitButtonCaption] = useState('Сохранить');
  const [profileSubmitButtonCaption, setProfileSubmitButtonCaption] = useState('Сохранить');
  const [placeSubmitButtonCaption, setPlaceSubmitButtonCaption] = useState('Создать');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isShowImagePopupOpen, setIsShowImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cards, setCards] = useState([]);

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

  function handleUpdateAvatar(avatar) {
    setAvatarSubmitButtonCaption('Сохранение...');
    api.saveUserAvatar(avatar)
      .then((profile) => {
        setCurrentUser(profile);
        closeAllPopups();
      })
      .catch ((error) => {
        alert(`Ошибка записи данных пользователя ${error.status}`);
      })
      .finally(() => {
        setAvatarSubmitButtonCaption('Сохранить');
      });
  }

  function handleUpdateUser(profile) {
    setProfileSubmitButtonCaption('Сохранение...');
    api.saveUserInfo(profile)
      .then((profile) => {
        setCurrentUser(profile);
        closeAllPopups();
      })
      .catch ((error) => {
        alert(`Ошибка записи данных пользователя ${error.status}`);
      })
      .finally(() => {
        setProfileSubmitButtonCaption('Сохранить');
      });
  }

  function handleAddPlace(place) {
    setPlaceSubmitButtonCaption('Сохранение...');
    api.saveNewCard(place)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch ((error) => {
        alert(`Ошибка записи данных нового места ${error.status}`)
      })
      .finally(() => {
        setPlaceSubmitButtonCaption('Создать');
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.toggleLike(card._id, isLiked)
      .then((editedCard) => {
        const editedCards = cards.map(card => card._id === editedCard._id ? editedCard : card);
        setCards(editedCards);
      })
      .catch(() => {
        alert('Не удалось изменить лайк. Попробуйте ещё раз.');
      });
  }

  function handleCardDelete(deletedСard) {
    api.deleteCard(deletedСard._id)
      .then(() => {
        const editedCards = cards.filter(card => card._id !== deletedСard._id);
        setCards(editedCards);
      })
      .catch((error) => {
        alert(`Ошибка при удалении карточки на сервере: ${error.status}`)
      });
  }

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((error) => {
        setCurrentUser({
          avatar: errorAvatar,
          name: error.status,
          about: error.statusText
        });
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
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
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
            submitButtonCaption={avatarSubmitButtonCaption}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            submitButtonCaption={profileSubmitButtonCaption}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
            submitButtonCaption={placeSubmitButtonCaption}
          />
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
