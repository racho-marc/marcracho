import { Link } from "react-router-dom";
import NavbarSocial from "../navbar-social/navbar-social.component";

const NavbarProfile = () => {
    return (
        <div className="profile px-4 py-5">
            <div className="img-branding text-center">
                <picture role="presentation" className="pb-3 d-block">
                    <img src="assets/img/profile-img.png" alt="" className="img-fluid" />
                </picture>
                <Link to="/" className="text-light h4 fw-bolder text-decoration-none">Marc Racho</Link>
            </div>
            <NavbarSocial />
        </div>
    )
}

export default NavbarProfile;