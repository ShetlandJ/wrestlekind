import React from 'react';
import {
    Nav, Navbar, Row, Col, Container
} from 'react-bootstrap';

function Home() {
    return (
        <div>
            <div className="intro-box">
                <p className="mb-0"><b>WrestleKind</b> is a non-profit organisation that aims to bring joy to the sick and disadvantaged through the shared love of wrestling!</p>
            </div>
            <img
                src={process.env.PUBLIC_URL + "/viper.png"}
                alt="logo"
                className="home-image"
            />
        </div>
    )
}

export default Home;