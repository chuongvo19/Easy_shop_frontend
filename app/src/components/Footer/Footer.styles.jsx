import styled from 'styled-components';
import {
    Container,
    Row,
    Col
 } from 'react-bootstrap';
 import { Form, InputGroup } from 'react-bootstrap';


const StyledBgFooter = styled.div`
    background-color: #212934;;
`;

const StyledFooter = styled(Row)`
`;

const StyledCol = styled(Col)`
    text-align: left;
    padding: 48px 12px 0 12px;
    
`;

const StyledCardTitle = styled.div`
    border-bottom: 1px solid #2d343f;
    font-size: 30px;
    padding-bottom: 16px;
    margin-bottom: 8px;
    color: #cfd6e1;
    font-weight: 300;
    .title-brand {
        color: #59ab6e;
        font-weight: 500;
    }
`;


const StyledCardContent = styled.div`
    color: #cfd6e1;
    font-size: 18px;
    font-weight: 300;
    .ul-info {
        margin: 0px;
        padding: 10px 0 0 0;
    };
    
    .li-info {
        display: inline-block;
    };
    
    .style-icon {
        margin-right: 10px;
    };
`;

const StyledBr = styled.div`
    padding: 30px 12px 0px 12px;
    margin-bottom: 16px;
    border-bottom: 1px solid #2d343f;
    `;

const StyleFooterBot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
`;

const StyledSocial = styled.ul`
    margin: 0 0 16px 0;
    padding: 0;
    width: 30%;
    display: flex;
    .styleTagLi {
        display: inline-block;
        border: solid 1px #2d343f;
        margin-right: 8px;
        width: 2.6em;
        height: 2.6em;
        line-height: 2.6em;
        border-radius: 50%;
    }

    .tag-link-social {
        color: #cfd6e1;
        font-size: 1.33333em;
        line-height: .75em;
        vertical-align: -0.0667em;
    }
`;

const StyledFormEmail = styled(Form.Control)`
    background-color: #212934;
    border-color: #2d343f;
    padding: 6px 12px;
    border: 1px solid #2d343f;
    font-size: 18px;
    font-weight: 300;
`;

const StyledBtnSubcribe = styled(InputGroup.Text)`
    background-color: #59ab6e;
    padding: 6px 12px;
    border-color: #56ae6c;
    font-size: 18px;
    font-weight: 300;
    color: #cfd6e1;
`;

const StyledLineCopyright = styled.div`
    background-color: #1d242d;
    text-align: left;
    padding: 16px 0;
    .tag-title {
        color: #cfd6e1;
        font-size: 18px;
        font-weight: 300;
        margin: 0 0 16px 0;
    }
`;

export { 
    StyledFooter, StyledCol, StyledCardTitle, StyledCardContent, StyledBgFooter,
    StyledBr, StyleFooterBot, StyledSocial, StyledFormEmail, StyledBtnSubcribe,
    StyledLineCopyright
 }