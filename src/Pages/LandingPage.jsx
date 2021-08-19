import React from 'react';
import Navbar from '../Components/LandingPage/Navbar/Navbar';
import HomePage from '../Components/LandingPage/HomePage/HomePage';
import Featured from '../Components/LandingPage/Featured/Featured';
import Footer from '../Components/LandingPage/Footer/Footer';

export default function Page() {
    return (
        <div className="App">
            <Navbar/>
            <HomePage />
            <Featured />
            <Footer />
        </div>
    )
}
