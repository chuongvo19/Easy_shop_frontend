import styled from "styled-components";

const StyledSocialLogin = styled.div`
    align-items: center;
`;

const StyledLoginWithSocial = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 100px;
    margin: 15px 25px;
    border: 1px solid black;
    .title-login-social {
        color: #212934;
        font-size: 18px;
        font-weight: 300;
    };

    .icon-login-social {
    };

    &:hover {
        border: 1px solid white;
        background-color: #59ab6e;
        color: white;
        transition: 0.3s;
    }
` ;

export { StyledSocialLogin, StyledLoginWithSocial };