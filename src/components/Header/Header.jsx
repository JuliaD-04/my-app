import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://cdn.pixabay.com/photo/2018/04/05/23/59/coffee-3294633_1280.jpg'/>
            <div className={s.loginBlock}>
                {/*если мы залогинены, то покажем имя-логин, если нет, то ссылку*/}
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;