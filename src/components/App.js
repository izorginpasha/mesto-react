import React from 'react'; 
import Header from './Header.js'; // прошу любить и жаловать компонент header
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import '../index.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.popupProfile=<><input className="popup__text " type="text" id="popupFio" name="popup-fio" required minLength={2} maxLength={40} placeholder="Имя"/>
        <span className="popup__error" id="span-popup-fio" ></span>
        <input className="popup__text" type="text" id="popupHobby" name="popup-hobby" required minLength={2} maxLength={200}placeholder="Занятие"/>
        <span className="popup__error" id="span-popup-hobby"></span></>;
    this.popupDelCard=<></>;
    this.popupNewAvatar=<><input className="popup__text" type="url" id="popupLinkAvatar" name="popup-Link-avatar" placeholder="Ссылка на картинку" required/>
        <span className="popup__error" id="span-popup-Link-avatar"></span></>;
    this.popupNewMesto=<><input className="popup__text " type="text" id="popupName" name="popup-name" placeholder="Название" required minLength={2} maxLength={30}/>
        <span className="popup__error"  id="span-popup-name"></span>
        <input className="popup__text" type="url" id="popupLink" name="popup-Link" placeholder="Ссылка на картинку" required/>
        <span className="popup__error" id="span-popup-Link"></span></>;
 
    this.state = {
        isEditProfilePopupOpen:false,
        isAddPlacePopupOpen:false,
        isEditAvatarPopupOpen:false,
        selectedCard:false,
    }
  }
  handleCardClick=(card)=>{
    this.setState({ selectedCard:true });
    this.card = card;
  }
  handleEditAvatarClick =()=>{

    this.setState({ isEditAvatarPopupOpen:true });
   }
handleEditProfileClick =()=>{
        
        this.setState({ isEditProfilePopupOpen:true });
    
}
 handleAddPlaceClick =()=>{
    this.setState({ isAddPlacePopupOpen:true });
}
closeAllPopups=()=>{
    this.setState({ isEditProfilePopupOpen:false,
        isAddPlacePopupOpen:false,
        isEditAvatarPopupOpen:false,
        selectedCard:false,
     });
}
    render(){
    return (
    <div className="page">
    <div className="page__container">
        <Header/>
        <Main isEditProfilePopupOpen = {this.handleEditProfileClick} isAddPlacePopupOpen={this.handleAddPlaceClick} isEditAvatarPopupOpen={this.handleEditAvatarClick} onCardClick={this.handleCardClick}/>
        <Footer/>
        < PopupWithForm name='#popupProfile' title="Редактировать профиль" children={this.popupProfile} isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups}/>
        < PopupWithForm name='#popupDelCard' title="Вы уверены?" children={this.popupDelCard} isOpen={false} onClose={false}/>
        < PopupWithForm name='#popupNewAvatar' title="Обновить аватар" children={this.popupNewAvatar} isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups}/>
        < PopupWithForm name='#popupNewMesto"' title="Новое место" children={this.popupNewMesto} isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups}/>
        <ImagePopup isOpen={this.state.selectedCard} onClose={this.closeAllPopups} card={this.card}/>
        <div className="popup" id="popupNewMesto">
            <div className="popup__overlay"></div>
            <div className="popup__container">
                <form className="popup__form" id="popupFormNewMesto" name="popup-form-mesto">
                    <h3 className="popup__title">Новое место</h3>
                    <input className="popup__text " type="text" id="popupName" name="popup-name" placeholder="Название" required minlength="2" maxlength="30"/>
                    <span className="popup__error"  id="span-popup-name"></span>
                    <input className="popup__text" type="url" id="popupLink" name="popup-Link" placeholder="Ссылка на картинку" required/>
                    <span className="popup__error" id="span-popup-Link"></span>
                    <button className="popup__button" disabled type="submit" id="buttonNew"><span className="popup__button-title">Сохранить</span></button>
                </form>
                <button className="popup__close" aria-label="close" type="button"></button>
            </div>
        </div>
    </div>
    </div>
  )
}
}
export default App;
