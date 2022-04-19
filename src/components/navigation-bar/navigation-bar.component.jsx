import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar className="nav-menu navbar-dark px-4">            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav as="ul" defaultActiveKey="/home" className="flex-column">
                    <li><Link className="nav-link link-light" to="/"><i className="bi bi-house-fill text-info"></i> <span className="ps-1">Home</span></Link></li>
                    <li><Link className="nav-link link-light" to="/about"><i className="bi bi-person-badge-fill text-info"></i> <span className="ps-1">About</span></Link></li>                    
                    <li><Link className="nav-link link-light" to="/contact"><i className="bi bi-envelope-fill text-info"></i> <span className="ps-1">Contact</span></Link></li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;