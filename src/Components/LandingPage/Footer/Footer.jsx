import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import './Footer.css';

export default function Footer() {
    return (
        <div className="main footer">
            <div className="footer-cont">
                <div className="container-left footer-left">
                    <div className="head" style={{marginTop:'20px'}}>Need Help ?</div>
                    <div style={{marginTop:'20px'}}>Email us at </div>
                    <div className="read-more"><ArrowRightAltIcon/> info.aetherjournals@gmail.com</div>
                    <div style={{marginTop:'20px'}}>Write to us on</div>
                    <div className="read-more"><ArrowRightAltIcon/> linkedin.com/aetherjournals</div>
                </div>
                <div className="container-right footer-right">
                    <div className="footer-right-1">
                        <li className="footer-li" style={{fontWeight:'bold'}}>Explore</li>
                        <li className="footer-li">Journals</li>
                        <li className="footer-li">Careers</li>
                        <li className="footer-li">About Us</li>
                        <li className="footer-li">Learn</li>
                    </div>
                    <div className="footer-right-2">
                        <li className="footer-li" style={{fontWeight:'bold'}}>Legal</li>
                        <li className="footer-li">Privacy Policy</li>
                        <li className="footer-li">Cookie Policy</li>
                        <li className="footer-li">Terms of use</li>
                    </div>
                </div>
                <div style={{marginTop:'20px'}}>© 2021 Arthashastra Young Associates LLP</div>
            </div>
        </div>
    )
}
