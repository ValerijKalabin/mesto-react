const childrenAvatarPopup = (
  <>
    <input className="popup__input" type="url" name="avatarlink" placeholder="Ссылка на изображение" required />
    <span className="popup__error" />
  </>
);

const childrenProfilePopup = (
  <>
    <input className="popup__input" type="text" name="username" placeholder="Имя" required minLength="2" maxLength="40" />
    <span className="popup__error" />
    <input className="popup__input" type="text" name="description" placeholder="О себе" required minLength="2" maxLength="200" />
    <span className="popup__error" />
  </>
);

const childrenPlacePopup = (
  <>
    <input className="popup__input" type="text" name="placename" placeholder="Название" required maxLength="30" />
    <span className="popup__error" />
    <input className="popup__input" type="url" name="placelink" placeholder="Ссылка на картинку" required />
    <span className="popup__error" />
  </>
);

export {
  childrenAvatarPopup,
  childrenProfilePopup,
  childrenPlacePopup
};
