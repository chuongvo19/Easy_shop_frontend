import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    StyledSocialLogin,
    StyledLoginWithSocial
} from './SocialLogin.styles';

function SocialLogin() {
    return (
        <StyledSocialLogin>
            <StyledLoginWithSocial>
                <FontAwesomeIcon className='icon-login-social' icon="fa-brands fa-google" />
                <span className='title-login-social'>Login With Google</span>
            </StyledLoginWithSocial>

            <StyledLoginWithSocial>
                <FontAwesomeIcon className='icon-login-social' icon="fa-brands fa-facebook" />
                <span className='title-login-social'>Login With Facebook</span>
            </StyledLoginWithSocial>
        </StyledSocialLogin>
    );
}

export default SocialLogin;