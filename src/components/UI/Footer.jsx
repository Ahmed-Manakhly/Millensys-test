import {Link} from 'react-router-dom' ;
import img from "../../assets/millensys-logo2019_200-cmyk.png" ;


function Footer() {
    return (
        <footer>
        <div className="container footer__container">
            <div className="footer-1">
            <Link to="/" className='logo_1' >
                    <img src={img} alt="MILLENSYS Logo - 200px - Unified Healthcare Management Software Platform"/>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea expedita ut cum atque commodi consequatur deserunt eum nisi rem.
                </p>
            </div>

            <div className="footer-2">
                <h4>Permalinks</h4>
                <ul className="permalinks">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="courses.html">Courses</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>

            <div className="footer-3">
                <h4>Primacy</h4>
                <ul className="primacy">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms And Conditions</a></li>
                    <li><a href="#">Refunding Policy</a></li>
                </ul>
            </div>

            <div className="footer-4">
                <h4>Contact Us</h4>
                <div className="contact__details">
                    <p>+201000000008</p>
                    <p>millensys_support@gmail.com</p>
                </div>
                <ul className="footer__social">
                    <li><a href="#"><i className="uil uil-facebook-f"></i></a></li>
                    <li><a href="#"><i className="uil uil-instagram-alt"></i></a></li>
                    <li><a href="#"><i className="uil uil-twitter"></i></a></li>
                    <li><a href="#"><i className="uil uil-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="footer__copyright">
            <small>&copy; 2024 Millensys</small>
        </div>
    </footer>
    )
}

export default Footer
