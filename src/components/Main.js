import React from 'react';
import { useState } from 'react';
import { api } from '../utils/constants';
import avatar from '../images/avatar.jpg';
import errorAvatar from '../images/avatar-error.jpg';

function Main(props) {
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [userName, setUserName] = useState('User');
  const [userDescription, setUserDescription] = useState('Life`s work');

  React.useEffect(() => {
    api.getUserProfile()
      .then((profile) => {
        setUserAvatar(profile.avatar);
        setUserName(profile.name);
        setUserDescription(profile.about);
      })
      .catch((error) => {
        setUserAvatar(errorAvatar);
        setUserName(error.status);
        setUserDescription(error.statusText);
      });
  });

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </button>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
              <p className="profile__description">{userDescription}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements-container">
        <ul className="elements"></ul>
      </section>
    </main>
  );
}

export default Main;
