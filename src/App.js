import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="page__container">
        <header class="header">
            <img class="header__logo" src= "<%=require('./images/logo.svg')%>" alt="логотип"/>
        </header>
        <main class="content">
            <section class="profile">

                <div class="profile__block">
                <img class="profile__avatar" src="<%=require('./images/image.jpg')%>" alt="Фото профиля"/>
                <div class="profile__overlay"></div>
                     </div>
                <div class="profile__info" >
                    <div class="profile__container">
                        <h1 class="profile__fio">Жак-Ив Кусто</h1>
                        <button class="profile__edit-button" type="button"></button>
                    </div>
                    <p class="profile__hobby">Исследователь океана</p>     
                </div>
                <button class="profile__add-button" type="button"></button>
            </section>
            <section class="element">
                <ul class="element__container"></ul>
            </section>
        </main>
        <footer class="footer">
            <p class="footer__title">© 2020 Mesto Russia</p>
        </footer>
        
       <div class="popup" id="popupProfile">
           <div class="popup__overlay"></div>
            <div class="popup__container">
                <form class="popup__form" id="popupFormProfile" name="popup-form-profile">
                    <h3 class="popup__title">Редактировать профиль</h3>
                    <input class="popup__text " type="text" id="popupFio" name="popup-fio" required minlength="2" maxlength="40" />
                    <span class="popup__error" id="span-popup-fio" ></span>
                    <input class="popup__text" type="text" id="popupHobby" name="popup-hobby" required minlength="2" maxlength="200"/>
                    <span class="popup__error" id="span-popup-hobby"></span>
                    <button class="popup__button  " disabled type="submit" id="buttonSave"><span class="popup__button-title popup__button-title_ivalid">Сохранить</span></button>
                </form>
                <button class="popup__close" aria-label="close" type="button"></button>
            </div>
        </div>
  
    <div class="popup popup_image-background" id="popupImage">
        <div class="popup__overlay"></div>
        <div class="popup__container-image">
            <img class="popup__image"/>
            <p class="popup__image-title">Image</p>
            <button class="popup__close" aria-label="close" type="button"></button>
        </div>
    </div>
    <template id="cards">
        <li class="element-item" id="">
            <button class="element-item__basket" aria-label="delete" type="button"></button>
            <img class="element-item__image"/>
            <div class="element-item__content">
                <h2 class="element-item__title"></h2>
                <div class="element-item__grop">
                    <button class="element-item__heart" type="button"></button>
                    <p class="element-item__number-like">0</p>
                </div>
                
            </div>
        </li>
    </template> 
    <div class="popup" id="popupDelCard">
        <div class="popup__overlay"></div>
        <div class="popup__container">
            <form class="popup__form" id="popupFormDelCard" name="popup-del-card">
                <h3 class="popup__title popup__title_del">Вы уверены?</h3>
                <button class="popup__button" type="submit" id="buttonDel"><span class="popup__button-title">Да</span></button>
            </form>
            <button class="popup__close" aria-label="close" type="button"></button>
        </div>
    </div>
    <div class="popup" id="popupNewAvatar">
        <div class="popup__overlay"></div>
        <div class="popup__container">
            <form class="popup__form" id="popupFormNewAvatar" name="popup-del-card">
                <h3 class="popup__title popup__title_avatar">Обновить аватар</h3>
                <input class="popup__text" type="url" id="popupLinkAvatar" name="popup-Link-avatar" placeholder="Ссылка на картинку" required/>
                    <span class="popup__error" id="span-popup-Link-avatar"></span>
                <button class="popup__button popup__button_avatar" disabled type="submit" id="buttonAvatarEdit"><span class="popup__button-title">Сохранить</span></button>
            </form>
            <button class="popup__close" aria-label="close" type="button"></button>
        </div>
    </div>
    </div>
  );
}

export default App;
