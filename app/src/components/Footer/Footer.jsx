import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { 
    StyledFooter, StyledCol, StyledCardTitle, StyledCardContent,
    StyledBgFooter, StyledBr, StyleFooterBot, StyledSocial, StyledFormEmail,
    StyledBtnSubcribe, StyledLineCopyright
} from './Footer.styles';
import { Form, InputGroup } from 'react-bootstrap';


function Footer() {
    return (
        <>
        <StyledBgFooter>
        <Container>
            <StyledFooter>
                <StyledCol>
                    <StyledCardTitle>
                        <div className='title-brand'>Easy Shop</div>
                    </StyledCardTitle>
                    <StyledCardContent>
                        <div>
                            <ul className="ul-info">
                                <li className='li-info style-icon'>
                                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                                </li>
                                <li className='li-info'>123 Consectetur at ligula 10660</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="ul-info">
                                <li className='li-info style-icon'>
                                    <FontAwesomeIcon icon="fa-solid fa-phone-flip" />
                                </li>
                                <li className='li-info'>010-020-0340</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="ul-info">
                                <li className='li-info style-icon'>
                                    <FontAwesomeIcon icon="fa-regular fa-envelope" />
                                </li>
                                <li className='li-info'>info@company.com</li>
                            </ul>
                        </div>
                    </StyledCardContent>
                </StyledCol>
                {/*  */}
                <StyledCol>
                    <StyledCardTitle>
                        Products
                    </StyledCardTitle>
                    <StyledCardContent>
                        <div className="ul-info">Luxury</div>
                        <div className="ul-info">Sport Wear</div>
                        <div className="ul-info">Men's Shoes</div>
                        <div className="ul-info">Women's Shoes</div>
                        <div className="ul-info">Popular Dress</div>
                        <div className="ul-info">Gym Accessories</div>
                        <div className="ul-info">Sport Shoes</div>
                    </StyledCardContent>
                </StyledCol>
                {/*  */}
                <StyledCol>
                    <StyledCardTitle>
                        Further Info
                    </StyledCardTitle>
                    <StyledCardContent>
                        <div className="ul-info">Home</div>
                        <div className="ul-info">About Us</div>
                        <div className="ul-info">FAQs</div>
                        <div className="ul-info">Contact</div>
                        <div className="ul-info">Sport Shoes</div>
                    </StyledCardContent>
                </StyledCol>
                {/*  */}
                <StyledBr></StyledBr>
                <StyleFooterBot>
                    <StyledSocial>
                        <li className='styleTagLi'>
                            <a href='#' className='tag-link-social'>
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                            </a>
                        </li>
                        <li className='styleTagLi'>
                            <a href='#' className='tag-link-social'>
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            </a>
                        </li>
                        <li className='styleTagLi'>
                            <a href='#' className='tag-link-social'>
                                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                            </a>
                        </li>
                        <li className='styleTagLi'>
                            <a href='#' className='tag-link-social'>
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                            </a>
                        </li>
                    </StyledSocial>
                    <div>
                        <InputGroup className="mb-3">
                            <StyledFormEmail
                            placeholder="Email address"
                            />
                            <StyledBtnSubcribe id="basic-addon2">Subscribe</StyledBtnSubcribe>
                        </InputGroup>
                    </div>
                </StyleFooterBot>
            </StyledFooter>
        </Container>
        </StyledBgFooter>
        <StyledLineCopyright>
            <Container>
                <div className='tag-title'>
                    Copyright © 2021 Company Name | Designed by TemplateMo
                </div>
            </Container>
        </StyledLineCopyright>
        </>
    );
}

export default Footer;