import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { ContextCard, contextCard } from '../contexts/ContextCard.js';
function Main(props) {
  const [cards, setCards] = React.useState({
    cards: [],
  });
  const сurrentUser = React.useContext(CurrentUserContext);
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === сurrentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.like(card._id, !isLiked).then((newCard) => {
      const isCards = cards.cards.map((c) => c._id === card._id ? newCard : c);
      setCards({ cards: isCards });

    });
  }
  function handleCardDelete(card) {
    api.delLike(card._id).then((newCard) => {
     const isCards = cards.cards.filter(function (n) {
      if (n._id=== newCard._id){
        return false;
      }
    
      return true;
    })
      setCards({ cards: isCards });

    });

  };
  React.useEffect(() => {

    function userCards() {
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




  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          <img
            className="profile__avatar"
            style={{ backgroundImage: `url(${сurrentUser.avatar})` }}
            alt=""
          />
          <div
            onClick={props.isEditAvatarPopupOpen}
            className="profile__overlay"
          ></div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__fio">{сurrentUser.name}</h1>
            <button
              onClick={props.isEditProfilePopupOpen}
              className="profile__edit-button"
              type="button"
            ></button>
          </div>
          <p className="profile__hobby">{сurrentUser.about}</p>
        </div>
        <button
          onClick={props.isAddPlacePopupOpen}
          className="profile__add-button"
          type="button"
        ></button>
      </section>
      <section className="element">
        <ul className="element__container">
          {cards.cards.map((card) => (

            <li className="element-item" key={card._id}>
              <ContextCard.Provider value={card}>
                <Card card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
              </ContextCard.Provider>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );

}
export default Main;
