import avatar from '../images/avatar.jpg';

function Main(props) {
  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
          <img src={avatar} alt="Аватар" className="profile__avatar" />
        </button>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">User</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
              <p className="profile__description">Life's work</p>
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
