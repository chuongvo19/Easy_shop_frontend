import React from 'react';
import { StyledFormLogin } from './FormLogin.styles';
import { Form, Button } from 'react-bootstrap';

function FormLogin() {
    return (
        <StyledFormLogin className="mb-3" controlId="exampleForm.ControlInput1">
            <div className='field-login'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </div>

            <div className='field-login'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
            </div>

            <div className=''>
                <Button variant="primary">Login</Button>
            </div>
        </StyledFormLogin>
    );
}

export default FormLogin;