import React from 'react'; 

class Footer extends React.Component {
    constructor(props){
      super(props);
    }
      render(){
            return (
                <footer className="footer">
                    <p className="footer__title">© 2020 Mesto Russia</p>
                </footer>
                );
            }
        }
    export default Footer;