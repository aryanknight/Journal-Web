import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Featured from './Components/Featured/Featured';

export default function Page() {
    return (
        <div className="App">
            <Navbar/>
            <HomePage />
            <Featured />
        </div>
    )
}
