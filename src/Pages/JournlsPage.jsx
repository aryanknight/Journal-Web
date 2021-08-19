import React from 'react';
import Navbar from '../Components/LandingPage/Navbar/Navbar';
import Journals from '../Components/Journals/Journals';
import Footer from '../Components/LandingPage/Footer/Footer';
import '../App.css';

export default function JournlsPage() {
    return (
        <div className="App">
            <Navbar/>
            <Journals />
            <Footer />
        </div>
    )
}

