import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <button
        className="element-item__basket"
        aria-label="delete"
        type="button"
      ></button>
      <img
        className="element-item__image"
        onClick={handleClick}
        style={{ backgroundImage: `url(${props.card.link})` }}
        alt=""
      />
      <div className="element-item__content">
        <h2 className="element-item__title">{props.card.name}</h2>
        <div className="element-item__grop">
          <button className="element-item__heart" type="button"></button>
          <p className="element-item__number-like">{props.card.likes.length}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
