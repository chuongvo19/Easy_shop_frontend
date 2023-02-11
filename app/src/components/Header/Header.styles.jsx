import { 
    Container,
    Nav,
    Navbar,
    NavDropdown
 } from 'react-bootstrap';
import styled from "styled-components";

 const StyledHeader = styled.div`
    background-color: white;
 `;

 const StyledLogo = styled(Navbar.Brand)`
    color: #59ab6e;
    font-weight: 500;
    font-size: xxx-large;
 `;



 export { StyledLogo, StyledHeader };