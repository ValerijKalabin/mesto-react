import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({ element, onElementClick, onElementLike, onElementDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = element.owner._id === currentUser._id;
  const isLiked = element.likes.some(like => like._id === currentUser._id);

  function handleClick() {
    onElementClick(element);
  }

  function handleLikeClick() {
    onElementLike(element);
  }

  function handleDeleteClick() {
    onElementDelete(element);
  }

  return (
    <>
      <img className="element__image" src={element.link} alt={element.name} />
      <div className="element__substrate" onClick={handleClick} />
      <div className="element__text">
        <h2 className="element__title">{element.name}</h2>
        <div className="element__like-container">
          <button className={`element__like ${isLiked && 'element__like_active'}`} type="button" onClick={handleLikeClick} />
          <p className="element__like-count">{element.likes.length}</p>
        </div>
      </div>
      <button className={`element__trash ${isOwn && 'element__trash_visible'}`} type="button" onClick={handleDeleteClick} />
    </>
  );
}

export default Card;
