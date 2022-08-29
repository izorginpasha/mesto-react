import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      userName: "",
      userDescription: "",
      userAvatar: "",
      cards: [],
    };
  }
  componentDidMount() {
    this.userProfile();
    this.userCards();
  }
  userProfile = () => {
    //получение данных профиля
    api
      .getUser()
      .then((result) => {
        this.setState({
          userName: result.name,
          userDescription: result.about,
          userAvatar: result.avatar,
        });
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  };
  userCards = () => {
    api
      .getInitialCards()
      .then((result) => {
        this.setState({
          cards: result,
        });
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  };
  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__block">
            <img
              className="profile__avatar"
              style={{ backgroundImage: `url(${this.state.userAvatar})` }}
              alt=""
            />
            <div
              onClick={this.props.isEditAvatarPopupOpen}
              className="profile__overlay"
            ></div>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__fio">Жак-Ив Кусто</h1>
              <button
                onClick={this.props.isEditProfilePopupOpen}
                className="profile__edit-button"
                type="button"
              ></button>
            </div>
            <p className="profile__hobby">Исследователь океана</p>
          </div>
          <button
            onClick={this.props.isAddPlacePopupOpen}
            className="profile__add-button"
            type="button"
          ></button>
        </section>
        <section className="element">
          <ul className="element__container">
            {this.state.cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={this.props.onCardClick}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}
export default Main;
