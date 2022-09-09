import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main (props) {
  const [userProfil, setUserProfil] = React.useState({
    userName: "",
    userDescription: "",
    userAvatar: "",
    cards: [],
  });
  const [cards, setCards] = React.useState({
    cards: [],
  });
  
  React.useEffect(() => {
   function userProfile  (){
      //получение данных профиля
      api
        .getUser()
        .then((result) => {
          setUserProfil({
            userName: result.name,
            userDescription: result.about,
            userAvatar: result.avatar,
          });
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    };
    function   userCards () {
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
    userProfile();
    userCards();
        
    
  },[]);


  // constructor(props) {
  //   super(props);
  //   this.props = props;
  //   this.state = {
  //     userName: "",
  //     userDescription: "",
  //     userAvatar: "",
  //     cards: [],
  //   };
  // }

  // componentDidMount() {
  //   this.userProfile();
  //   this.userCards();
  // }
 
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__block">
            <img
              className="profile__avatar"
              style={{ backgroundImage: `url(${userProfil.userAvatar})` }}
              alt=""
            />
            <div
              onClick={props.isEditAvatarPopupOpen}
              className="profile__overlay"
            ></div>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__fio">{userProfil.userName}</h1>
              <button
                onClick={props.isEditProfilePopupOpen}
                className="profile__edit-button"
                type="button"
              ></button>
            </div>
            <p className="profile__hobby">{userProfil.userDescription}</p>
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
              <li  className="element-item" key={card._id}>
                <Card card={card} onCardClick={props.onCardClick} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  
}
export default Main;
