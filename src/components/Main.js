import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { useState } from 'react';
import { api } from '../utils/constants';
import Card from './Card';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

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
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => {
        console.log('Ошибка сервера ' + error.status);
      });
  },[]);

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile} />
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="elements-container">
        <ul className="elements">
          {cards.map((card, index) => (
            <li className="element" key={card._id}>
              <Card
                element={card}
                onElementClick={props.onCardClick}
                onElementLike={handleCardLike}
                onElementDelete={handleCardDelete}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
