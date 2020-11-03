import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className= {s.header}>
            <img src='https://cdn.pixabay.com/photo/2018/04/05/23/59/coffee-3294633_1280.jpg' />
        </header>
    );
}

export default Header;