import React from "react";
import PopupWithForm from "./PopupWithForm.js";
function AddPlacePopup(props) {
    const refName = React.useRef();
    const refLink = React.useRef();

    function handleSubmit(e) {// обрабочик сабмита 
        e.preventDefault();

        props.onAddPlaceSubmit({
            popupName: refName.current.value,
            popupLink: refLink.current.value,
        });
    }

    return (
        <PopupWithForm
            name="#popupNewMesto"
            title="Новое место"
            children={<>
                <input
                    ref={refName}
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
                    ref={refLink}
                    className="popup__text"
                    type="url"
                    id="popupLink"
                    name="popup-Link"
                    placeholder="Ссылка на картинку"
                    required

                />
                <span className="popup__error" id="span-popup-Link"></span>
            </>}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        />

    );
}
export default AddPlacePopup;
