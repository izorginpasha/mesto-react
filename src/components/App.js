import React from 'react'; 
import Header from './Header.js'; // прошу любить и жаловать компонент header
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import '../index.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.popupProfile=<><input className="popup__text " type="text" id="popupFio" name="popup-fio" required minlength="2" maxlength="40" />
        <span className="popup__error" id="span-popup-fio" ></span>
        <input className="popup__text" type="text" id="popupHobby" name="popup-hobby" required minlength="2" maxlength="200"/>
        <span className="popup__error" id="span-popup-hobby"></span></>;
    this.popupDelCard=<></>;
    this.popupNewAvatar=<><input className="popup__text" type="url" id="popupLinkAvatar" name="popup-Link-avatar" placeholder="Ссылка на картинку" required/>
        <span className="popup__error" id="span-popup-Link-avatar"></span></>;
    this.popupNewMesto=<><input className="popup__text " type="text" id="popupName" name="popup-name" placeholder="Название" required minlength="2" maxlength="30"/>
        <span className="popup__error"  id="span-popup-name"></span>
        <input className="popup__text" type="url" id="popupLink" name="popup-Link" placeholder="Ссылка на картинку" required/>
        <span className="popup__error" id="span-popup-Link"></span></>;
 
    this.state = {
        isEditProfilePopupOpen:false,
        isAddPlacePopupOpen:false,
        isEditAvatarPopupOpen:false,
    }
  }
  handleEditAvatarClick (){

    this.setState({ isEditAvatarPopupOpen:true });
   }
    handleEditProfileClick (){
        
        this.setState({ isEditProfilePopupOpen:true });
    
}
 handleAddPlaceClick (){
    this.setState({ isAddPlacePopupOpen:true });
}
    render(){
    return (
    <div className="page">
    <div className="page__container">
        <Header/>
        <Main isEditProfilePopupOpen = {this.handleEditProfileClick} isAddPlacePopupOpen={this.handleAddPlaceClick} isEditAvatarPopupOpen={this.handleEditAvatarClick}/>
        <Footer/>
        < PopupWithForm name='#popupProfile' title="Редактировать профиль" children={this.profile} isOpen={this.state.isEditProfilePopupOpen}/>;
        < PopupWithForm name='#popupDelCard' title="Вы уверены?" children={this.popupDelCard} isOpen={false}/>;
        < PopupWithForm name='#popupNewAvatar' title="Обновить аватар" children={this.popupNewAvatar} isOpen={this.state.isEditAvatarPopupOpen}/>;
        < PopupWithForm name='#popupNewMesto"' title="Новое место" children={this.popupNewMesto} isOpen={this.state.isAddPlacePopupOpen}/>;
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
    <div className="popup popup_image-background" id="popupImage">
        <div className="popup__overlay"></div>
        <div className="popup__container-image">
            <img className="popup__image"/>
            <p className="popup__image-title">Image</p>
            <button className="popup__close" aria-label="close" type="button"></button>
        </div>
    </div>
    <template id="cards">
        <li className="element-item" id="">
            <button className="element-item__basket" aria-label="delete" type="button"></button>
            <img className="element-item__image"/>
            <div className="element-item__content">
                <h2 className="element-item__title"></h2>
                <div className="element-item__grop">
                    <button className="element-item__heart" type="button"></button>
                    <p className="element-item__number-like">0</p>
                </div>
                
            </div>
        </li>
    </template> 
    {/* <div className="popup" id="popupDelCard">
        <div className="popup__overlay"></div>
        <div className="popup__container">
            <form className="popup__form" id="popupFormDelCard" name="popup-del-card">
                <h3 className="popup__title popup__title_del">Вы уверены?</h3>
                <button className="popup__button" type="submit" id="buttonDel"><span className="popup__button-title">Да</span></button>
            </form>
            <button className="popup__close" aria-label="close" type="button"></button>
        </div>
    </div> */}
    {/* <div className="popup" id="popupNewAvatar">
        <div className="popup__overlay"></div>
        <div className="popup__container">
            <form className="popup__form" id="popupFormNewAvatar" name="popup-del-card">
                <h3 className="popup__title popup__title_avatar">Обновить аватар</h3>
                <input className="popup__text" type="url" id="popupLinkAvatar" name="popup-Link-avatar" placeholder="Ссылка на картинку" required/>
                    <span className="popup__error" id="span-popup-Link-avatar"></span>
                <button className="popup__button popup__button_avatar" disabled type="submit" id="buttonAvatarEdit"><span className="popup__button-title">Сохранить</span></button>
            </form>
            <button className="popup__close" aria-label="close" type="button"></button>
        </div>
    </div> */}
    </div>
    </div>
  );
}
}
export default App;
