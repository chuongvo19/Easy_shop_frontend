import { 
    Nav,
    Navbar
 } from 'react-bootstrap';
import styled from "styled-components";

const StyledPublicNavbar = styled.ul`
    padding: 0px;
    margin: 0px;
    text-decoration: none;
`;

const StyledItemNav = styled.li`
    display: inline-block;
    margin-left: 20px;
    .item-public-nav {
        font-weight: 300;
        font-size: 18px;
        color: #212934;
        text-decoration: none;
    }
`;

export { StyledPublicNavbar, StyledItemNav };