import React from 'react';
import Navbar from './assets/components/navbar/Navbar';
import Header from './assets/components/header/Header';
import Card from './assets/components/card/Card';
import Category from './assets/components/category/Category'
import Footer from './assets/components/footer/Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Card />
            <Category/>
            <Footer/>
        </>
    );
};

export default App;
