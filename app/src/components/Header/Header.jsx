import React from 'react';
import { 
    Container,
    Nav,
    Navbar,
    NavDropdown
 } from 'react-bootstrap';

import { 
    StyledLogo,
    StyledHeader
 } from './Header.styles';

import PublicNavbar from '../PublicNavbar/PublicNavbar';
import MainNavbar from '../MainNavbar/MainNavbar';

function Header() {

    const urlCurrent = window.location.href;
    const location = urlCurrent.replace('http://easyshop.com', '');

    const navbar = (location === '/login') ? <PublicNavbar /> : <MainNavbar />;

    return (
        <StyledHeader>
            <Navbar expand="lg">
                <Container>
                    <StyledLogo href="#home">Easy</StyledLogo>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/* item nav */}
                    {navbar}
                </Container>
            </Navbar>
        </StyledHeader>
    );
}

export default Header;