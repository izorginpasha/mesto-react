import React from 'react'; 
import images from '../images/image.jpg'; 

class Main extends  React.Component {
    constructor(props){
      super(props);
      this.props = props;
    }
    
    
render(){ 
    return (
        <main className="content">
            <section className="profile">

                <div className="profile__block">
                <img className="profile__avatar" src={images} alt="Фото профиля"/>
                <div onClick={this.props.isEditAvatarPopupOpen} className="profile__overlay"></div>
                     </div>
                <div className="profile__info" >
                    <div className="profile__container">
                        <h1 className="profile__fio">Жак-Ив Кусто</h1>
                        <button onClick={this.props.isEditProfilePopupOpen} className="profile__edit-button" type="button"></button>
                    </div>
                    <p className="profile__hobby">Исследователь океана</p>     
                </div>
                <button onClick={this.props.isAddPlacePopupOpen} className="profile__add-button" type="button"></button>
            </section>
            <section className="element">
                <ul className="element__container"></ul>
            </section>
        </main>
        );
    }
}  
    export default Main;