import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const StyledFormLogin = styled(Form.Group)`
    text-align: left;
    padding: 20px 15px;
    border: 2px solid #59ab6e;
    border-radius: 7px;

    .field-login {
        margin-bottom: 20px;
    }
`;



export { StyledFormLogin };