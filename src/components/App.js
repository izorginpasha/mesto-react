import React from "react";
import Header from "./Header.js"; // прошу любить и жаловать компонент header
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import "../index.css";

function App(props) {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    selectedCard: false,
    card: {}
  });

  function handleCardClick(card) {
    setSelectedCard({
      selectedCard: true,
      card: card
    });
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {

    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

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
          children={<>
            <input
              className="popup__text "
              type="text"
              id="popupFio"
              name="popup-fio"
              required
              minLength={2}
              maxLength={40}
              placeholder="Имя"
            />
            <span className="popup__error" id="span-popup-fio"></span>
            <input
              className="popup__text"
              type="text"
              id="popupHobby"
              name="popup-hobby"
              required
              minLength={2}
              maxLength={200}
              placeholder="Занятие"
            />
            <span className="popup__error" id="span-popup-hobby"></span>
          </>}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="#popupDelCard"
          title="Вы уверены?"
          children={""}
          isOpen={false}
          onClose={false}
        />
        <PopupWithForm
          name="#popupNewAvatar"
          title="Обновить аватар"
          children={<>
            <input
              className="popup__text"
              type="url"
              id="popupLinkAvatar"
              name="popup-Link-avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error" id="span-popup-Link-avatar"></span>
          </>}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="#popupNewMesto"
          title="Новое место"
          children={<>
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
          </>}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          isOpen={selectedCard.selectedCard}
          onClose={closeAllPopups}
          card={selectedCard.card}
        />
      </div>
    </div>
  );
}
export default App;
