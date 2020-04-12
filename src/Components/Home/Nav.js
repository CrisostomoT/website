import React from 'react';
import Nav from 'react-bootstrap/Nav';

//Custom styles/Libraries
import Tada from 'react-reveal/Tada'
import './style.css'

const NavPage = () => {
    return (
        <div className='container-nav' >
        <Nav className="justify-content-end">
            <Tada>
            <Nav.Item className='text-nav'>
                <a href="/">Home</a>
            </Nav.Item>
            </Tada>
            <Tada>
            <Nav.Item className='text-nav'>
                <a href="/">Contact me!</a>
            </Nav.Item>
            </Tada>
            <Tada>
            <Nav.Item className='text-nav'>
                <a href="/">Skills</a>
            </Nav.Item>
            </Tada>
        </Nav>
        </div>
    )
}

export default NavPage