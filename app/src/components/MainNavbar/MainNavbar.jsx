import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    StyledNavItemPage,
    StyledNavItemCustomer
} from './MainNavbar.styles';

function MainNavbar() {
    return (
        <>
        <StyledNavItemPage>
            <ul className='ul-item-page'>
                <li className='li-item-page'>Home</li>
                <li className='li-item-page'>About</li>
                <li className='li-item-page'>Shop</li>
                <li className='li-item-page'>Contact</li>
            </ul>
        </StyledNavItemPage>
        <StyledNavItemCustomer>
            <ul className='ul-item-customer'>
                <li className='li-item-customer'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></li>
                <li className='li-item-customer'><FontAwesomeIcon icon="fa-solid fa-cart-plus" /></li>
                <li className='li-item-customer'><FontAwesomeIcon icon="fa-solid fa-user" /></li>
            </ul>
        </StyledNavItemCustomer>  
        </>
    );
}

export default MainNavbar;