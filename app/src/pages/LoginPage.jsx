import React from 'react';
import { 
    Container,
    Row,
    Col
 } from 'react-bootstrap';
import MainLayout from '../layouts/MainLayout';
import FormLogin from '../components/FormLogin/FormLogin';
import SocialLogin from '../components/SocialLogin/SocialLogin';

function LoginPage() {
    return (
        <MainLayout>
            <Container>
            <Row>
                <Col>
                    <FormLogin />
                </Col>
                <Col>
                    <SocialLogin />
                </Col>
            </Row>
            </Container>
        </MainLayout>
    );
}

export default LoginPage;