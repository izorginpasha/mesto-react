import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.card = props.card;
  }
  handleClick = () => {
    this.props.onCardClick(this.card);
    console.log(this.card.id);
  };
  render() {
    return (
      <li className="element-item" id={this.card._id}>
        <button
          className="element-item__basket"
          aria-label="delete"
          type="button"
        ></button>
        <img
          className="element-item__image"
          onClick={this.handleClick}
          style={{ backgroundImage: `url(${this.card.link})` }}
          alt=""
        />
        <div className="element-item__content">
          <h2 className="element-item__title">{this.card.name}</h2>
          <div className="element-item__grop">
            <button className="element-item__heart" type="button"></button>
            <p className="element-item__number-like">
              {this.card.likes.length}
            </p>
          </div>
        </div>
      </li>
    );
  }
}
export default Card;
