import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

import faceBook from "../../Images/Icons/Facebook_logo.png";
import instagram from "../../Images/Icons/Instagram_logo.png";

import twitter from "../../Images/Icons/Twitter_logo.png";


// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (




    <footer>

      <div className="footer">

        <div className="container">
         
          <div className="footerSection">
            <h4 className="footerTitle">Support</h4>
            <Link to="/faq">FAQ</Link>
            <Link to="/reportbugs">Report Bugs</Link>
            <Link to="/cookiespolicy">Cookies Policy</Link>
          </div>

          <div className="footerSection">
            <h4 className="footerTitle">About Us</h4>
            <Link to="/agb">AGB</Link>
            <Link to="/impressum">Impressum</Link>
            <Link to="/Terms">Terms and Privecy</Link>
          </div>

          <div className="footerSection">
          <div>
              <h4 className="footerTitle">Social Media</h4>
              <div className="socialMedia">
                <Link className="face" to="facebook">
                  {/* <img src={faceBook} alt="Facebook Link" /> */}
            
                </Link>
                <Link className="twitter" to="Twitter">
                  {/* <img src={twitter} alt="Twitter Link" /> */}
         
                 
                </Link>
                <Link className="instagram" to="Instagram">
                  {/* <img src={instagram} alt="Instagram Link" /> */}
                 
                </Link>
                
              </div>
            </div>
            
          </div>
          <div className="footerSection reach">
            <div>
              <h4 className="footerTitle">Reach to Us</h4>
              <Link to="/contactus">Contact US</Link>
              <Link to="/career">Career</Link>
            </div>
           
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2021 Don't Pay</p>
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;
