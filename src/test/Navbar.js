import './Test.css';
import HamburgerButton from './nav/HamburgerButton';
import Navigation from './nav/Navigation';
import {useState} from 'react';

const Navbar = () => {
    let activeStyle = {width: '300px', marginRight: '70px'};
    let noActive = {};
    const [navActive, setNavActive] = useState(false);
    const handleClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navigation');
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('navigation--active');

        // active 부분
        if (navActive) {
            setNavActive(false);
            console.log(navActive);
        } else {
            setNavActive(true);
            console.log(navActive);
        }
    };
    return <>
        <div className="navbar_container"
             style={navActive ? activeStyle : noActive}>
            <button className="hamburger p-4" onClick={handleClick}>
      <span className="hamburger__box">
        <span className="hamburger__inner"></span>
      </span>
            </button>
            <Navigation/>
        </div>
    </>;
};
export default Navbar;
