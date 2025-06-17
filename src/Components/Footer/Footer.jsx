import footerCSS from './../Footer/Footer.module.css'

function Footer() {
    return (
        <div className={`${footerCSS.Footer_wrapper} section`}>
            <div className={footerCSS.top_container}>
                <div className={footerCSS.logo}>
                    <a href="#">Traveler</a>
                </div>
                <div className={footerCSS.social}>
                    <i className="ri-facebook-line"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-twitter-x-line"></i>
                    <i className="ri-youtube-line"></i>
                </div>
            </div>
            <div className={footerCSS.bottom_container}>
                <div className={footerCSS.footerLinks}>
                    <h3>About Traveler</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our History</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Destinations</h3>
                    <ul>
                        <li><a href="#">Japan</a></li>
                        <li><a href="#">New Zealand</a></li>
                        <li><a href="#">Switzerland</a></li>
                        <li><a href="#">Norway</a></li>
                        <li><a href="#">Costa Rica</a></li>
                        <li><a href="#">Iceland</a></li>
                    </ul>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Request a Quote</a></li>
                        <li><a href="#">Booking Conditions</a></li>
                        <li><a href="#">Recommendations</a></li>
                    </ul>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Our NewsLetter</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, sequi!</p>

                    <div className={footerCSS.inputWrapper}>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Footer