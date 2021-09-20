import react from 'react';
import styled from 'styled-components'
import Banner from './banner.js'
import Reviews from './Reviews/Reviews.js'
import './css/homepage.css'

const HomePage= () => {
    return (
        <div className="homepage">
            <Banner />
            <Reviews />
        </div>
    );
}

export default HomePage;