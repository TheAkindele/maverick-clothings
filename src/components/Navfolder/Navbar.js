import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
    return (
        <Navbar bg="secondary" expand="md" className='navbar'>
            <Navbar.Brand className='nav-left'><Link to='/'>maverick CLOTHING</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
            <Navbar.Collapse id="basic-navbar-nav" className='nav-right'>
                <Nav className=" list mr-auto">
                    <Link to='/shop' className='nav'>SHOP</Link>
                    <Link to='/contact' className='nav'>CONTACT</Link>
                    <Link to='/sign-in' className='nav'>SIGN-IN</Link>
                    <Link to='/cart' className='nav'>CART</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
