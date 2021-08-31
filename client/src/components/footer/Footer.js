import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import footerImg from '../../Images/footer_vec.svg';
import dontpayVec from '../../Images/dontpay.svg'

function Footer() {
    return (
        <div>
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
                        
                    </div>
                    <div className="footerSection reach">
                        <div>
                        <h4 className="footerTitle">Reach to Us</h4>
                        <Link to='/contactus'>Contact US</Link>
                        <Link to='/career'>Career</Link>
                        </div>
                        <div>
                    <h4 className="footerTitle">Social Media</h4>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; 2021 Don't Pay</p>
                </div>


            </div>
        </div>
    )
}

export default Footer
