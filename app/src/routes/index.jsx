import React from 'react';
import { 
    BrowserRouter,
    Routes,
    Route
 } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';

function Index() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;