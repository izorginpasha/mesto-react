import React from "react";

class PopupWithForm extends React.Component {

  render() {
    if (this.props.isOpen) {
      return (
        <div className="popup popup_opened" id={this.props.name}>
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <form
              className="popup__form"
              id={`popupForm${this.props.name}`}
              name={`popup-form-${this.props.name}`}
            >
              <h3 className="popup__title">{this.props.title}</h3>
              {
                this.props.name === "#popupProfile" ? <>
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
                </> : ""
              }
              {this.props.name === "#popupNewAvatar" ? <>
                <input
                  className="popup__text"
                  type="url"
                  id="popupLinkAvatar"
                  name="popup-Link-avatar"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="popup__error" id="span-popup-Link-avatar"></span>
              </> : ""}
              {this.props.name === '#popupNewMesto' ? <>
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
              </> : ""}
              <button
                className="popup__button"
                disabled
                type="submit"
                id="button"
              >
                <span className="popup__button-title">Сохранить</span>
              </button>
            </form>
            <button
              className="popup__close"
              aria-label="close"
              type="button"
              onClick={this.props.onClose}
            ></button>
          </div>
        </div>
      );
    }
  }
}
export default PopupWithForm;
