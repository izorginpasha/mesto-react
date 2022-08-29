import React from "react";
import Header from "./Header.js"; // прошу любить и жаловать компонент header
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import "../index.css";

function App(props) {
  const popupDelCard = <></>;
  const popupNewAvatar = (
    <>
      <input
        className="popup__text"
        type="url"
        id="popupLinkAvatar"
        name="popup-Link-avatar"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error" id="span-popup-Link-avatar"></span>
    </>
  );
  const popupNewMesto = (
    <>
      <input
        className="popup__text "
        type="text"
        id="popupName"
        name="popup-name"
        placeholder="Название"
        required
        minLength={2}
        maxLength={30}
      />
      <span className="popup__error" id="span-popup-name"></span>
      <input
        className="popup__text"
        type="url"
        id="popupLink"
        name="popup-Link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error" id="span-popup-Link"></span>
    </>
  );
  const [state , setState] = React.useState({
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
    isEditAvatarPopupOpen: false,
    selectedCard: false,
    card:{},
  });
 
 

  function handleCardClick (card) {
    setState({ selectedCard: true,
        card:card,});
  };
  function  handleEditAvatarClick () {
    setState({ isEditAvatarPopupOpen: true });
  };
  function  handleEditProfileClick  () {
    setState({ isEditProfilePopupOpen: true });
  };
  function handleAddPlaceClick  () {
    setState({ isAddPlacePopupOpen: true });
  };
  function  closeAllPopups () {
    setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: false,
    });
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          isEditProfilePopupOpen={handleEditProfileClick}
          isAddPlacePopupOpen={handleAddPlaceClick}
          isEditAvatarPopupOpen={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="#popupProfile"
          title="Редактировать профиль"
          isOpen={state.isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="#popupDelCard"
          title="Вы уверены?"
          children={popupDelCard}
          isOpen={false}
          onClose={false}
        />
        <PopupWithForm
          name="#popupNewAvatar"
          title="Обновить аватар"
          children={popupNewAvatar}
          isOpen={state.isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name='#popupNewMesto"'
          title="Новое место"
          children={popupNewMesto}
          isOpen={state.isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          isOpen={state.selectedCard}
          onClose={closeAllPopups}
          card={state.card}
        />
      </div>
    </div>
  );
}
export default App;
