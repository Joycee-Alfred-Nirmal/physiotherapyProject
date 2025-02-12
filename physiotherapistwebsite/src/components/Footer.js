import React from 'react';
import './footer.css';


import footerLogo from '../images/footer-logo.svg';
import twitterIcon from '../images/Twitter_white.png';
import facebookIcon from '../images/Facebook_white.png';
import instagramIcon from '../images/Instagram_white.png';
import linkedinIcon from '../images/linkedin2.png';

export default function Footer() {
  return (
    <div className='footerOuter'>
      <div className='footerInner'>
        <div className='footerContainer'>
          <div className='footerHeadImageMain'>
            <img src={footerLogo} alt="Footer Logo" /> 
          </div>
          <div className='footercontainerbox'>
            <div className='footerbox1'>

              <p>
                Great Indian Physiotherapist <br/>
                #201, Plot no 4, Mani Plaza, KPHB 9th Phase, <br/>
                Kukatpally, Hyderabad - 500085 <br/>
                 info@yvidhya.com
                <br/> +91 98856 00666
              </p>
            </div>
            <div className='footerbox2'>
              <p>
                #201, Plot no 4, Mani Plaza, KPHB 9th Phase, <br/>
                Kukatpally, Hyderabad - 500085 <br/>
                 +91 98856 00666 <br/>
                 info@yvidhya.com
                 <br/> 
              </p>
            </div>
            <div className='footerbox3'>
            <p>
                #201, Plot no 4, Mani Plaza, KPHB 9th Phase, <br/>
                Kukatpally, Hyderabad - 500085 <br/>
                 +91 98856 00666 <br/>
                 info@yvidhya.com
                 <br/> 
              </p>
            </div>
          </div>
          <div className='footerlistouter'>
            <ul className='footerlistinner'>
              <li>Online Yoga Classes</li>
              <li>How it Works</li>
              <li>Experts</li>
              <li>Blogs</li>
              <li>Privacy Policy</li>
              <li>Features</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className='footericonouter'>
            <div className='footericoninner'>
              <img src={twitterIcon} alt="Twitter" /> 
              <img src={facebookIcon} alt="Facebook" /> 
              <img src={instagramIcon} alt="Instagram" /> 
              <img className='linkedin' src={linkedinIcon} alt="LinkedIn" /> 
            </div>
          </div>
          <div className='rightscontainer'>
            <p>©2024 Livespire Pvt Ltd. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
