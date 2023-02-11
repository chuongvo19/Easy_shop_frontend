import React from 'react';
import HeaderTop from '../components/HeaderTop/HeaderTop';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
function MainLayout(props) {
    const elementContent = props.children;

    return (
        <div>
            {/*Start Header Top*/}
            <div>
                <HeaderTop />
            </div>
            {/* End Header Top */}
            {/* Start Header */}
            <div>
                <Header />
            </div>
            {/* End Header */}
            {/* Start Content */}
            <div>
                {elementContent}
            </div>
            {/* End Content */}
            {/* Start Footer */}
            <div>
                <Footer />
            </div>
            {/* End Footer */}
        </div>
    );
}

export default MainLayout;