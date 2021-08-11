import React from 'react';
import Img1 from '../../Images/img1.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="main home">
            <div className="container home-cont">
                <div className="container-left">
                    <div className="head home-head">
                        A great piece of copy, well written and just inviting .
                    </div>
                    <div className="para home-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="home-buttons">
                        <button className="main-button">Submit Papers <ArrowForwardIosIcon/></button>
                        <button className="main-button">Explore Journals <ArrowForwardIosIcon/></button>
                    </div>
                </div>
                <div className="container-right">
                    <img src={Img1} id="home-img"/>
                </div>
            </div>
        </div>
    )
}
