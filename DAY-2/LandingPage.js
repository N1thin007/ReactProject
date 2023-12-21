import React from 'react';
import Navbar from './Navbar';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="header">
                    <h1>SCHOOL MANAGING SYSTEM</h1>
                    <p>Managing Simplified!</p>
                </div>
            </div>
            <div className="footer">
                <p>&copy; 2023 School Management System</p>
            </div>
            </div>
    );
};

export default LandingPage;
