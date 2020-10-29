const childrenAvatarPopup = (
  <>
    <input class="popup__input" type="url" name="avatarlink" placeholder="Ссылка на изображение" required />
    <span class="popup__error" />
  </>
);

const childrenProfilePopup = (
  <>
    <input class="popup__input" type="text" name="username" placeholder="Имя" required minlength="2" maxlength="40" />
    <span class="popup__error" />
    <input class="popup__input" type="text" name="description" placeholder="О себе" required minlength="2" maxlength="200" />
    <span class="popup__error" />
  </>
);

const childrenPlacePopup = (
  <>
    <input class="popup__input" type="text" name="placename" placeholder="Название" required maxlength="30" />
    <span class="popup__error" />
    <input class="popup__input" type="url" name="placelink" placeholder="Ссылка на картинку" required />
    <span class="popup__error" />
  </>
);

export {
  childrenAvatarPopup,
  childrenProfilePopup,
  childrenPlacePopup
};
