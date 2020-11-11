import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { useState } from 'react';
import { api } from '../utils/constants';
import Card from './Card';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

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
              <Card element={card} onElementClick={props.onCardClick} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
