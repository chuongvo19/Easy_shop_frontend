import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MainLayout from '../layouts/MainLayout';
import BannerHero from '../components/BannerHero/BannerHero';

function HomePage() {
    return (
        <MainLayout>
            <BannerHero />
            <div>
                This is HomePage
            </div>
        </MainLayout>
    );
}

export default HomePage;