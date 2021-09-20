import './css/footer.css'

const Footer =() => {
    return (
        <div className="footer-main">
            <div className='footer-container'>
                <div className="footer-left">
                    <p className="left-headline">Location</p>
                    <p className="left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="footer-center">
                    <p className="center-headline">Contacts</p>
                    <p className="center-phones">+380584555656 <br></br> +382544454554</p>
                    <p className="center-mail">mail-email@mail.com</p>
                </div>

                <div className="footer-right">
                    <p className="right-headline">About</p>
                    <p className="right-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;