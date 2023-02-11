import React, { useState } from 'react';
import { 
    StyledBannerHero,
    StyledBannerBox,
    StyledContentBanner
 } from './BannerHero.styles';
import { 
    Carousel,
    Row,
    Col
 } from 'react-bootstrap';
import { ImageBanner01, ImageBanner02, ImageBanner03 } from '../../images';

function BannerHero() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (
        <StyledBannerHero>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <StyledBannerBox>
                    <Row>
                        <StyledContentBanner>
                            <div className='content-banner-box'>
                                <h1 className='h1'>Zay eCommerce</h1>
                                <h3 className='h2'>Tiny and Perfect eCommerce Template</h3>
                                <p className='p'>Zay Shop is an eCommerce HTML5 CSS template
                                with latest version of Bootstrap 5 (beta 1). This template is
                                100% free provided by TemplateMo website. Image credits go to
                                Freepik Stories, Unsplash and Icons 8.</p>
                            </div>
                        </StyledContentBanner>
                        <Col>    
                            <img className='img-banner-hero' src={ImageBanner01} alt="IMG" />
                        </Col>
                    </Row>
                    </StyledBannerBox>
                </Carousel.Item>
                <Carousel.Item>
                    <StyledBannerBox>
                    <Row>
                        <StyledContentBanner>
                            <div className='content-banner-box'>
                                <h1 className='h1'>Proident occaecat</h1>
                                <h3 className='h2'>Aliquip ex ea commodo consequat</h3>
                                <p className='p'>You are permitted to use this Zay CSS template
                                for your commercial websites. You are not permitted to
                                re-distribute the template ZIP file in any kind of template
                                collection websites.</p>
                            </div>
                        </StyledContentBanner>
                        <Col>    
                            <img className='img-banner-hero' src={ImageBanner02} alt="IMG" />
                        </Col>
                    </Row>
                    </StyledBannerBox>
                </Carousel.Item>
                <Carousel.Item>
                    <StyledBannerBox>
                    <Row>
                        <StyledContentBanner>
                            <div className='content-banner-box'>
                                <h1 className='h1'>Repr in voluptate</h1>
                                <h3 className='h2'>Ullamco laboris nisi ut</h3>
                                <p className='p'>We bring you 100% free CSS templates for your websites.
                                If you wish to support TemplateMo, please make a small contribution via
                                PayPal or tell your friends about our website. Thank you.</p>
                            </div>
                        </StyledContentBanner>
                        <Col>    
                            <img className='img-banner-hero' src={ImageBanner03} alt="IMG" />
                        </Col>
                    </Row>
                    </StyledBannerBox>
                </Carousel.Item>
            </Carousel>
        </StyledBannerHero>
    );
}

export default BannerHero;