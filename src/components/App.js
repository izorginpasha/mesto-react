import React from "react";
import Header from "./Header.js"; // прошу любить и жаловать компонент header
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import "../index.css";
import { api } from "../utils/Api.js";
import { CurrentUserContext, сurrentUser } from '../contexts/CurrentUserContext.js';
function App(props) {
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
  const [cards, setCards] = React.useState({ //массив карточек
    cards: [],
  });

  const сurrentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {// обрабочик лаика
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === сurrentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.like(card._id, !isLiked).then((newCard) => {
      const isCards = cards.cards.map((c) => c._id === card._id ? newCard : c);
      setCards({ cards: isCards });

    });
  }
  function handleCardDelete(card) {//обрабочик делаика
    api.delCard(card._id).then((result) => {
      const isCards = cards.cards.filter(function (n) {
        if (n._id === card._id) {
          return false;
        }

        return true;
      })
      setCards({ cards: isCards });

    });

  };
  React.useEffect(() => {

    function userCards() {// полуление массива карточек
      api
        .getInitialCards()
        .then((result) => {
          setCards({
            cards: result,
          });
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    };
    userCards();


  }, []);

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
      Object.assign(currentUsercontext, result); // добавляем результат запроса на страницу
      setEditProfilePopupOpen(false);//закрываем окно
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        // popupProfile.buttonSpan.textContent = "Сохранить";
      });
  }
  function handleUpdateAvatar({ avatar }) { // обновление аватара
    api.setUserAvatar(avatar).then((result) => {
      Object.assign(currentUsercontext, result); // добавляем результат запроса на страницу
      setEditAvatarPopupOpen(false);//закрываем окно
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      }).finally(() => { //popupNewAvatar.buttonSpan.textContent="Сохранить";
      });
  }
  function handleAddPlaceSubmit({ popupName, popupLink }) { // функция обрабочик кнопки создать карточку

    api.setCard(popupName, popupLink).then((result) => {
      setCards({ cards: [result, ...cards.cards] });
      setAddPlacePopupOpen(false);
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        // popupNewMesto.buttonSpan.textContent = "Сохранить";

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
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit} />
          <PopupWithForm
            name="#popupDelCard"
            title="Вы уверены?"
            children={""}
            isOpen={false}
            onClose={false}
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
