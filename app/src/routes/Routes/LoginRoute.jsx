import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';

function LoginRoute() {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />}/>
        </Routes>
    );
}

export default LoginRoute;