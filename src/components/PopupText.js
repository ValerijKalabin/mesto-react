function PopupText() {
  return (
    <main>
      <div className="popup popup_task_profile">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="profile" action="/" method="POST" novalidate>
              <input className="popup__input" type="text" name="username" placeholder="Имя" required minlength="2" maxlength="40" />
              <span className="popup__error"></span>
              <input className="popup__input" type="text" name="description" placeholder="О себе" required minlength="2" maxlength="200" />
              <span className="popup__error"></span>
              <button className="popup__button" type="submit">Сохранить</button>
            </form>
            <button className="popup__icon-close" type="button"></button>
          </div>
        </div>
        <div className="popup popup_task_place">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="place" action="/" method="POST" novalidate>
              <input className="popup__input" type="text" name="name" placeholder="Название" required maxlength="30" />
              <span className="popup__error"></span>
              <input className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="popup__error"></span>
              <button className="popup__button" type="submit">Создать</button>
            </form>
            <button className="popup__icon-close" type="button"></button>
          </div>
        </div>
        <div className="popup popup_task_confirm">
          <div className="popup__container">
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__button" type="button">Да</button>
            <button className="popup__icon-close" type="button"></button>
          </div>
        </div>
        <div className="popup popup_task_avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form" name="avatarform" action="/" novalidate>
              <input className="popup__input" type="url" name="avatar" placeholder="Ссылка на изображение" required />
              <span className="popup__error"></span>
              <button className="popup__button" type="submit">Сохранить</button>
            </form>
            <button className="popup__icon-close" type="button"></button>
          </div>
        </div>
    </main>
  );
}

export default PopupText;