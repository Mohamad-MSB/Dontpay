import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import footerImg from '../../Images/footer_vec.svg';
import dontpayVec from '../../Images/dontpay.svg';

import americanExpress from '../../Images/Icons/American_express_logo.png';
import applePay from '../../Images/Icons/Apple_Pay_logo.png';
import faceBook from '../../Images/Icons/Facebook_logo.png';
import instagram from '../../Images/Icons/Instagram_logo.png';
import klarna from '../../Images/Icons/Klarna_logo.png';
import masterCard from '../../Images/Icons/Mastercard_logo.png';
import paypal from '../../Images/Icons/PayPal_logo.png';
import pinterest from '../../Images/Icons/Pinterest_logo.png';
import twitter from '../../Images/Icons/Twitter_logo.png';
import visa from '../../Images/Icons/Visa_logo.png';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="footerSection">
                        <div className="footerImgTitle"><img src={dontpayVec} alt="Don'T pay footer"/></div>
                        <div className="footerImg"><img src={footerImg} alt="footer image"/></div>

                    </div>
                    <div className="footerSection">
                        <h4 className="footerTitle">Support</h4>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/livechat'>Live Chat</Link>
                        <Link to='/reportbugs'>Report Bugs</Link>
                        <Link to='/cookiespolicy'>Cookies Policy</Link>
                    </div>
                    <div className="footerSection">
                        <h4 className="footerTitle">About Us</h4>
                        <Link to='/agb'>AGB</Link>
                        <Link to='/impressum'>Impressum</Link>
                        <Link to='/liveChat'>Terms and Privecy</Link>
                    </div>
                    <div className="footerSection">
                        <h4 className="footerTitle">Payment Methods</h4>
                        <div className="paymentFooter">
                            <div>
                            <Link to='Payment'><img src={visa} alt="Visa Payment"/></Link>
                            <Link to='Payment'><img src={masterCard} alt="Master Card Payment"/></Link>
                            <Link to='Payment'><img src={americanExpress} alt="American Express Payment"/></Link>
                            </div>
                            <div>
                            <Link to='Payment'><img src={klarna} alt="Klarna Payment"/></Link>
                            <Link to='Payment'><img src={paypal} alt="PayPal Payment"/></Link>
                            <Link to='Payment'><img src={applePay} alt="Apple Pay Payment"/></Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className="footerSection reach">
                        <div>
                        <h4 className="footerTitle">Reach to Us</h4>
                        <Link to='/contactus'>Contact US</Link>
                        <Link to='/career'>Career</Link>
                        </div>
                        <div>
                    <h4 className="footerTitle">Social Media</h4>
                    <div className="socialMedia">
                    <Link to='facebook'><img src={faceBook} alt="Facebook Link"/></Link>
                    <Link to='Twitter'><img src={twitter} alt="Twitter Link"/></Link>
                    <Link to='Instagram'><img src={instagram} alt="Instagram Link"/></Link>
                    <Link to='Pinterest'><img src={pinterest} alt="Pinterest Link"/></Link>
                    </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; 2021 Don't Pay</p>
                </div>
            </div>
        </foot>
    )
}

export default Footer
