import React from 'react'; 

class ImagePopup extends  React.Component {
    constructor(props){
      super(props);
      this.props= props;
  
    }
    render(){ 
        if(this.props.isOpen){
        return (
            <div className="popup popup_image-background popup_opened" id="popupImage">
        <div className="popup__overlay"></div>
        <div className="popup__container-image">
            <img className="popup__image" src={this.props.card.link} alt={this.props.card.name}/>
            <p className="popup__image-title">{this.props.card.name}</p>
            <button className="popup__close" aria-label="close" onClick={this.props.onClose} type="button"></button>
        </div>
    </div>
        );
        }}
    }
    export default ImagePopup;