import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import headerBgImg from '../images/headerBgImg.webp'; 
import hipaaImg from '../images/hipaa.webp';
import gdprImg from '../images/gdpr.webp';
import isoImg from '../images/iso.webp';

export default function Header() {
  return (
    <div>
      <div className='headerSection'>
        <div>
          <img className='img1' src={headerBgImg} alt="Header Background" />
        </div>
        <div className='headercontainer'>
          <h1>Online Physiotherapy</h1>
          <h2>Live a healthy and happy life</h2>
          <h3>free from pain!</h3>
          <p className='para1'>Combining physiotherapy with latest research and</p> 
          <p className='para2'>technology to deliver life long results</p>
          <div>
            <button className='btn1'>Say Goodbye To Pain Today</button>
          </div>
          <div className='headerImages'>
            <img src={hipaaImg} alt="HIPAA Compliance" />
            <img src={gdprImg} alt="GDPR Compliance" />
            <img src={isoImg} alt="ISO Certification" />
          </div>
          <li className='forhidden'>
            <Link to="/book-appointment" className='btnmain22'>
              <button className="btn22">Book an Appointment</button>
            </Link> 
          </li>
        </div>
      </div>
    </div>
  );
}
