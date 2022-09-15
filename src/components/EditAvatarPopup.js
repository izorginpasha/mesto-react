import React from "react";
import PopupWithForm from "./PopupWithForm.js";
function EditAvatarPopup(props) {
    const refAvatar = React.useRef();

    function handleSubmit(e) {// обрабочик сабмита 
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: refAvatar.current.value,/* Значение инпута, полученное с помощью рефа */
        });
    }

    return (
        <PopupWithForm
            name="#popupNewAvatar"
            title="Обновить аватар"
            children={<>
                <input
                    ref={refAvatar}
                    className="popup__text"
                    type="url"
                    id="popupLinkAvatar"
                    name="popup-Link-avatar"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__error" id="span-popup-Link-avatar"></span>
            </>}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        />
    );
}
export default EditAvatarPopup;
