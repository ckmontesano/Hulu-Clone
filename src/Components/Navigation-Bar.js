
import './Navigation-Bar.css';

import HuluLogo from '../Resources/Images/HuluLogo.svg';
import MagnifyingGlass from '../Resources/Icons/magnifying-glass.png';

export default function NavBar() {

    window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        let navBar = document.querySelector("nav");
        
        if ( offset != 0 ) {
            navBar.classList.add("scrolled");
        } else {
            navBar.classList.remove("scrolled");
        }
    })

    return (
        <nav>
            <div className="branding-container">
                <a>
                    <img src={HuluLogo} alt="Hulu" />
                </a>
            </div>
            <ul className="nav-options-container">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>TV</a>
                </li>
                <li>
                    <a>Movies</a>
                </li>
                <li>
                    <a>Holidays</a>
                </li>
                <li>
                    <a>My Stuff</a>
                </li>
                <li>
                    <a>Hubs</a>
                </li>
            </ul>
            <div className="user-options">
                <a className="magifying-glass-container">
                    <img src={MagnifyingGlass} alt="Search" />
                </a>
                <a className="profile-icon-container">
                    <div className="profile-icon">
                        <text className="profile-icon-text">C</text>
                    </div>
                </a>
            </div>
            
        </nav>
    )
}