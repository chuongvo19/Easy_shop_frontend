import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    StyledNavbar,
    StyledContainer,
    StyledCardInfomation,
    StyledCardSocial
 } from './HeaderTop.styles';

function HeaderTop() {
    return (
        <>
        <StyledNavbar>
            <StyledContainer>
                <StyledCardInfomation>
                    <li className='styleTagLi'>
                        <FontAwesomeIcon icon="fa-regular fa-envelope" />
                        <a href='#' className='styleTagLink'>info@company.com</a>
                    </li>
                    <li className='styleTagLi'>
                        <FontAwesomeIcon icon="fa-solid fa-phone" />
                        <a href='#' className='styleTagLink'>010-020-0340</a>
                    </li>
                </StyledCardInfomation>
                <StyledCardInfomation>
                    <li className='styleTagLi'>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    </li>
                    <li className='styleTagLi'>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </li>
                    <li className='styleTagLi'>
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    </li>
                    <li className='styleTagLi'>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </li>
                </StyledCardInfomation>
                {/* <StyledCardSocial>social</StyledCardSocial> */}
            </StyledContainer>
        </StyledNavbar>
        </>
    );
}

export default HeaderTop;