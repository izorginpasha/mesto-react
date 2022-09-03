import React from "react";
import Header from "./Header.js"; // прошу любить и жаловать компонент header
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import "../index.css";

function App(props) {
  const [state, setState] = React.useState({
    card: {},
  });
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleCardClick(card) {
    setSelectedCard( true );
   setState({card: card});
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true );
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen( true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true );
  }
  function closeAllPopups() {
   
    setEditProfilePopupOpen(false );
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false );
     setSelectedCard( false );
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
          children={""}
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
          children={""}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="#popupNewMesto"
          title="Новое место"
          children={""}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          isOpen={selectedCard}
          onClose={closeAllPopups}
          card={state.card}
        />
      </div>
    </div>
  );
}
export default App;
