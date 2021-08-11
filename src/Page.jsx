import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';

export default function Page() {
    return (
        <div className="App">
            <Navbar/>
            <HomePage />
        </div>
    )
}
