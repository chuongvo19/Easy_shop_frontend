import React from 'react';
import { 
    Nav
 } from 'react-bootstrap';
import styled from "styled-components";
import { 
    StyledPublicNavbar,
    StyledItemNav
 } from './PublicNavbar.styles';

function PublicNavbar() {
    return (
        <StyledPublicNavbar>
            <StyledItemNav><a className='item-public-nav' href='/login'>Login</a></StyledItemNav>
            <StyledItemNav><a className='item-public-nav' href='/contact'>Contact</a></StyledItemNav>
        </StyledPublicNavbar>
        
    );
}

export default PublicNavbar;