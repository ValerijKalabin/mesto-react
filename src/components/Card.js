function Card(props) {
  return (
    <>
      <img className="element__image" src={props.element.link} />
      <div className="element__substrate"></div>
      <div className="element__text">
        <h2 className="element__title">{props.element.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <p className="element__like-count">{props.element.likes.length}</p>
        </div>
      </div>
      <button className="element__trash" type="button"></button>
    </>
  );
}

export default Card;
