import styled from 'styled-components';
import { 
    Container,
    Navbar
 } from 'react-bootstrap';

const StyledNavbar = styled(Navbar)`
    background-color: #212529;
`;

const StyledContainer = styled(Container)`
    color: #cfd6e1;
    font-size: 11px;
`;

const StyledCardInfomation = styled.ul`
    margin: 0px;
    padding: 5px 0px;
    .styleTagLi {
        display: inline-block;
        margin-left: 12px;
    }
    .styleTagLink {
        text-decoration: none;
        margin-left: 12px;
        color: #cfd6e1;
    }
`;

const StyledCardSocial = styled.div`
    /* color: white; */
`;

export { 
    StyledNavbar,
    StyledContainer,
    StyledCardInfomation,
    StyledCardSocial
 };