import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Img2 from '../../Images/img2.png';
import './Featured.css';

export default function Featured() {
    return (
        <div className="main featured">
            <div className="container">
                <div className="title" style={{margin:'40px 0px'}} >Featured Picks</div>
                <div className="featured-cont-1">
                    <div className="box-1">
                        <div className="featured-box">
                            <div className="featured-box-pic">
                                <img src={Img2} style={{width:'100%'}} />
                            </div>
                            <div className="featured-box-para">
                                <div className="para-1">
                                    Author Name / DD MM YYYY
                                </div>
                                <div style={{fontSize:'24px',marginTop:'15px'}}>
                                    The title for the research and more text placeholder and more text to show big titles .
                                </div>
                                <div className="para" style={{maxWidth:'100%',width:'100%',marginTop:'15px'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .
                                </div>
                                <div style={{marginTop:'15px',display:'flex',justifyContent:'flex-start'}}>
                                    <div className="read-more"><ArrowRightAltIcon/> <u>Read More</u></div>
                                </div>       
                            </div>
                        </div>
                    </div>
                    <div className="box-2">
                        <div className="featured-box" style={{height:'100%'}}>
                            <div className="featured-box-pic">
                                <img src={Img2} style={{width:'100%',height:'100%'}} />
                            </div>
                            <div className="featured-box-para">
                                <div className="para-1">
                                    Author Name / DD MM YYYY
                                </div>
                                <div style={{fontSize:'24px',marginTop:'15px'}}>
                                    The title for the research and more text placeholder and more text to show big titles .
                                </div>
                                <div style={{marginTop:'15px',display:'flex',justifyContent:'flex-start'}}>
                                    <div className="read-more"><ArrowRightAltIcon/> <u>Read More</u></div>
                                </div>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
