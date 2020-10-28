import avatar from '../images/avatar.jpg';

function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_task_avatar').classList.add('popup_opened');
  };

  function handleEditProfileClick() {
    document.querySelector('.popup_task_profile').classList.add('popup_opened');
  };

  function handleAddPlaceClick() {
    document.querySelector('.popup_task_place').classList.add('popup_opened');
  };

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={handleEditAvatarClick}>
          <img src={avatar} alt="Аватар" className="profile__avatar" />
        </button>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">User</h1>
              <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
            </div>
              <p className="profile__description">Life's work</p>
            </div>
            <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements-container">
        <ul className="elements"></ul>
      </section>
    </main>
  );
}

export default Main;
