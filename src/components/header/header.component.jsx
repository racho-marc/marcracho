import NavbarProfile from "../navbar-profile/navbar-profile.component";
import NavigationBar from "../navigation-bar/navigation-bar.component";

import './header.styles.scss';

const Header = () => {
    return (
        <div className="header position-fixed top-0 start-0 h-100 px-3 py-4">
            <NavbarProfile />
            <NavigationBar />
        </div>
    )
}

export default Header;