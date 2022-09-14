import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
function EditProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function ChangeName(e) {
    setName(e.target.value);
  }
  function ChangeDescription(e) {
    setDescription(e.target.value);
  }
  
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: name,
      about: description,
    });
  } 
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
          onChange={ChangeName}
          value={name}
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
          onChange={ChangeDescription}
          value={description}
        />
        <span className="popup__error" id="span-popup-hobby"></span>
      </>}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />

  );
}
export default EditProfilePopup;