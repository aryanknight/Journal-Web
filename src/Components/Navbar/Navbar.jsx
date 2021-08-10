import React , {useEffect} from 'react';
import Logo from '../../Images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';

export default function Navbar() {

    useEffect(()=>{
        const a =document.getElementsByClassName("smallnav-cont")[0];
        a.style.maxHeight="0px";
    },[])
    
    function collapse(){
        const a =document.getElementById("search-cont");
        if(a.style.maxWidth=="0px"){
            a.style.maxWidth=a.scrollWidth+"px";
        }else{
            a.style.maxWidth="0px";
        } 
    }

    function collapseSmall(){
        const a =document.getElementsByClassName("smallnav-cont")[0];
        const b =document.getElementsByClassName("smallnav-cont-1")[0];
        if(a.style.maxHeight=="0px"){
           // b.style.paddingTop="4rem";
            a.style.maxHeight=a.scrollHeight+"px";  
            console.log('a');
        }else{
           // b.style.paddingTop="0rem";
            a.style.maxHeight="0px";
            console.log('b');
        } 
    }

    return (
        <>
            <div className="main navbar">
                <div className="container navbar-cont">
                    <div className="nav-left">
                        <img src={Logo} id="logo" />
                    </div>
                    <div className="nav-right">
                        <div className="menu-item">Journals</div>
                        <div className="menu-item">Publish with us</div>
                        <div className="menu-item">About us</div>
                        <div className="menu-item">Learn</div>
                        <div className="menu-item" id="search-cont">
                            <input type="text" placeholder="Search" id="search-bar" />
                        </div>
                        <div className="menu-item" onClick={collapse}><SearchIcon/> </div>
                    </div>

                    <div className="small-nav" onClick={collapseSmall}>
                        <MenuIcon fontSize="large"/>
                    </div>

                </div>

            </div>
            <div className="smallnav-cont">
                <div className="smallnav-cont-1">
                    <div className="small-menu-item">Journals</div>
                    <div className="small-menu-item">Publish with us</div>
                    <div className="small-menu-item">About us</div>
                    <div className="small-menu-item">Learn</div>
                </div>
            </div>
            
        </>
    )
}
