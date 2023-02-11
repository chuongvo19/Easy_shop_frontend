import styled from "styled-components";
import { 
    Container,
    Col
 } from "react-bootstrap";

const StyledBannerHero = styled.div`
    background: #efefef;

    .img-banner-hero {
        max-width: 100%;
        height: auto;
    };
`;

const StyledBannerBox = styled(Container)`
    padding: 3rem;
`;

const StyledContentBanner = styled(Col)`
    text-align: left;
    display: flex;
    align-items: center;
    
    .h1 {
        font-size: 48px;
        font-weight: 200;
        margin-bottom: 16px;
    };

    .h2 {
        font-size: 30px;
        font-weight: 300;
        margin-bottom: 16px;
    };

    .p {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 16px;
    };

`;

export { StyledBannerHero, StyledBannerBox, StyledContentBanner }; 