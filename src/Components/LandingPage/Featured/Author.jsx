import React from 'react';
import Img5 from '../../../Images/img5.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Author() {
    return (
            <div className="main author">
                <div className="container author-cont">
                    <div className="container-left author-left">
                        <div className="title author-head">
                            For Authors
                        </div>
                        <div className="para author-para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className="author-buttons">
                            <button className="main-button">Publish with Us<ArrowForwardIosIcon/></button>
                        </div>
                    </div>
                    <div className="container-right author-right">
                        <img src={Img5} id="author-img"/>
                    </div>
                </div>
                <div className="container editor-cont">
                    <div className="container-right editor-left">
                        <img src={Img5} id="editor-img"/>
                    </div>
                    

                    <div className="container-left editor-right">
                        <div className="title author-head">
                            For Editors
                        </div>
                        <div className="para author-para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className="author-buttons">
                            <button className="main-button">Work with Us<ArrowForwardIosIcon/></button>
                        </div>
                    </div>
                </div>    
                
            </div>
    )
}
