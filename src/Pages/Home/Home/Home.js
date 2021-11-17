import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <AboutUs />
            <AppointmentBanner />
            <Doctors />
            <Reviews />
        </div>
    );
};

export default Home;