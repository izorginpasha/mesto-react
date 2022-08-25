import React from 'react'; 

class PopupWithForm extends React.Component {
    constructor(props){
      super(props);
      this.props= props;
  
    }
      render(){
        if(this.props.isOpen){
        return(
          
            <div className="popup popup_opened"   id={this.props.name}>
            <div className="popup__overlay"></div>
            <div className="popup__container">
                <form className="popup__form" id={`popupForm${this.props.name}`} name={`popup-form-${this.props.name}`}>
                    <h3 className="popup__title">{this.props.title}</h3>
                    {this.props.children}
                    <button className="popup__button" disabled type="submit" id="button"><span className="popup__button-title">Сохранить</span></button>
                </form>
                <button className="popup__close" aria-label="close" type="button"></button>
            </div>
        </div>
        );}

      }
}
export default PopupWithForm;