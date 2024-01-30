import {useState} from 'react';

const HamburgerButton = () => {
    const handleClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navigation');
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('navigation--active');
        console.log(111);
    };
    return <>
        <button className="hamburger" onClick={handleClick}>
      <span className="hamburger__box">
        <span className="hamburger__inner"></span>
      </span>
        </button>
    </>;
};
export default HamburgerButton;
