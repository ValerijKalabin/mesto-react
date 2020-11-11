import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.element.owner._id === currentUser._id;
  const isLiked = props.element.likes.some(like => like._id === currentUser._id);

  function handleClick() {
    props.onElementClick(props.element);
  }

  function handleLikeClick() {
    props.onElementLike(props.element);
  }

  function handleDeleteClick() {
    props.onElementDelete(props.element);
  }

  return (
    <>
      <img className="element__image" src={props.element.link} alt={props.element.name} />
      <div className="element__substrate" onClick={handleClick} />
      <div className="element__text">
        <h2 className="element__title">{props.element.name}</h2>
        <div className="element__like-container">
          <button className={`element__like ${isLiked && 'element__like_active'}`} type="button" onClick={handleLikeClick} />
          <p className="element__like-count">{props.element.likes.length}</p>
        </div>
      </div>
      <button className={`element__trash ${isOwn && 'element__trash_visible'}`} type="button" onClick={handleDeleteClick} />
    </>
  );
}

export default Card;
