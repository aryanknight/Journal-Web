import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Cards from './Cards/Cards';
import News from '../../Images/news.png';
import News1 from '../../Images/news1.png';
import News2 from '../../Images/news2.png';
import './Journals.css';

export default function Journals() {
    return (
        <div className="main journals">
            <div className="container">
                <div className="head">Journals</div>
                <div className="input-cont">
                    <div className="input-box">
                        <SearchIcon className="search-icon"/>
                        <input type="text" className="input-field" placeholder="Search Journals Library" />
                    </div>
                </div>
                <div className="cards-cont">
                    <Cards img={News} title="Legal Studies" />
                    <Cards img={News1} title="Business Management"  />
                    <Cards img={News2} title="Social Sciences and Applied Sciences"  />
                </div>
                
            </div>
        </div>
    )
}
