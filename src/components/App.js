import React from "react";
import Header from "./Header.js"; // прошу любить и жаловать компонент header
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import "../index.css";
import { api } from "../utils/Api.js";
import { CurrentUserContext, сurrentUser } from '../contexts/CurrentUserContext.js';
function App(props) {
  const  [textButtonSave, setTextButtonSave] = // стеит данных пользователя
  React.useState("Сохранить");
  const [currentUsercontext, setCurrentUser] = // стеит данных пользователя
    React.useState({});
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = // стеит открытия попап профиль
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);// стеит открытия попап карточки создания
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);// стеит открытия попап смена аватара
  const [selectedCard, setSelectedCard] = React.useState({// стеит открытия попап картинки
    selectedCard: false,
    card: {}
  });

  React.useEffect(() => {
    function iscurrentUser() {
      //получение данных профиля
      api
        .getUser()
        .then((result) => {
          setCurrentUser(result);
          Object.assign(currentUsercontext, result);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    };
    iscurrentUser();

  }, []);
  function handleCardClick(card) {// обрабочик клика клика по каринке
    setSelectedCard({
      selectedCard: true,
      card: card
    });

  }
  function handleEditAvatarClick() { // обрабочик смены аватара
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {// обрабочик смены данных профиля
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {// обрабочик добавления карточки
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {// обрабочик закрытия попап

    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }
  function handleUpdateUser({ name, about }) {// обрабочик добавления данных профмля
    //setTextButtonSave();
    api.setUserProfile(name, about).then((result) => {
      setCurrentUser(result);
      Object.assign(currentUsercontext, result);; // добавляем результат запроса на страницу
      setEditProfilePopupOpen(false);//закрываем окно
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        // popupProfile.buttonSpan.textContent = "Сохранить";
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUsercontext}>
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
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

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
    </CurrentUserContext.Provider>
  );
}
export default App;
