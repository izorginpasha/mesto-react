import React from "react";
import PopupWithForm from "./PopupWithForm.js";
function EditProfilePopup(props) {


    return (
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
        isOpen={props.isOpen}
        onClose={props.onClose}
      />

    );
}
export default EditProfilePopup;