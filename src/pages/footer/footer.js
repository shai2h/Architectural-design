import react from "react";
import {Link} from "react-router-dom";
import "../footer/footer.scss";


function Footer () {
    return(
        <div className="footer-block">
            <div className="footer-top-block">
                <span className="logo">LOGO</span>
                <nav className="nav-items">
                    <ul className="ul-items">
                        <li>
                            <Link className="list-item" to="/About_Us">О нас</Link>
                            {/* <a className="list-item" href="/about_us">О нас</a> */}
                            <a className="list-item" href="">Услуги</a>
                            <a className="list-item" href="">Портфолио</a>
                            <a className="list-item" href="">Награды</a>
                        </li>
                    </ul>
                </nav>
                <div className="social">
                    <div className="inst"></div>
                    <div className="vk"></div>
                </div>
            </div>

            <div className="footer-down-block">
                <div className="footer-contact">
                    <div className="foo-contact-phone">
                        <div className="foo-phone">
                            <div>
                                <div className="foo-phone-img"></div>
                                Телефон
                            </div>
                            
                        </div>
                        <span>+800 000 0000</span>
                    </div>
                    <div className="foo-contact-adress">
                        <div className="foo-adress">
                            <div>
                                <div className="foo-adress-img"></div>
                                Адрес
                            </div>
                            
                        </div>
                        <span>г. Казань, Чуйкова 58Б</span>
                    </div>
                    <div className="foo-contact-mail">
                        <div className="foo-mail">
                                <div>
                                    <div className="foo-mail-img"></div>
                                    Почта
                                </div>
                                
                        </div>
                        <span>adaptdesign@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;