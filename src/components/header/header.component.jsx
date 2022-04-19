import { Fragment, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarProfile from "../navbar-profile/navbar-profile.component";


import './header.styles.scss';

const Header = () => {
    const [isActive, setActive] = useState(false);
    
    const mobNavToggle = () => {
        const body = document.querySelector('body');
        body.classList.toggle('mobile-nav-active');
        setActive(!isActive);
    };
    return (
        <Fragment>
        <i className={isActive ? 'bi bi-x mobile-nav-toggle d-xl-none' : 'bi bi-list mobile-nav-toggle d-xl-none'} onClick={mobNavToggle}></i>
        <div className="header position-fixed top-0 start-0 h-100 px-3 py-4">
            <NavbarProfile />            
            <Navbar className="nav-menu navbar-dark px-4 ">            
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav as="ul" defaultActiveKey="/home" className="flex-column">
                        <li><Link className="nav-link link-light" onClick={mobNavToggle} to="/"><i className="bi bi-house-fill text-info"></i> <span className="ps-1">Home</span></Link></li>
                        <li><Link className="nav-link link-light" onClick={mobNavToggle} to="/about"><i className="bi bi-person-badge-fill text-info"></i> <span className="ps-1">About</span></Link></li>                    
                        <li><Link className="nav-link link-light" onClick={mobNavToggle} to="/contact"><i className="bi bi-envelope-fill text-info"></i> <span className="ps-1">Contact</span></Link></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </Fragment>
    )
}

export default Header;