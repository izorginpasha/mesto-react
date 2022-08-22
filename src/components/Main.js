import React from 'react'; 
import images from '../images/image.jpg'; 

function Main() {
    return (
        <main className="content">
            <section className="profile">

                <div className="profile__block">
                <img className="profile__avatar" src={images} alt="Фото профиля"/>
                <div className="profile__overlay"></div>
                     </div>
                <div className="profile__info" >
                    <div className="profile__container">
                        <h1 className="profile__fio">Жак-Ив Кусто</h1>
                        <button className="profile__edit-button" type="button"></button>
                    </div>
                    <p className="profile__hobby">Исследователь океана</p>     
                </div>
                <button className="profile__add-button" type="button"></button>
            </section>
            <section className="element">
                <ul className="element__container"></ul>
            </section>
        </main>
        );
    }
    
    export default Main;