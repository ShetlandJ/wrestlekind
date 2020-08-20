import React from 'react';
import {
    Nav, Navbar
} from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
            <div>
                <Navbar.Brand href="#home" className="mr-0">
                    <img
                        src={process.env.PUBLIC_URL + "/WK_logo.png"}
                        alt="logo"
                        className="wk-logo"
                    />
                </Navbar.Brand>
            </div>

            <div>
                <Nav className="m-auto">
                    <p className="header-text mb-0">WrestleKind</p>
                </Nav>
            </div>

            <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;