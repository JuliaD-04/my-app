import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

console.log(s)

// Для справки: мы получаем объект у которого есть ключ и значение
// let s = {
//   'nav':'Navbar_nav_9YTr',
//   'item':'Navbar-item_87TR'
// }

// Если 2 свойства
// let c1 = 'item';
// let c2 = 'active';
// "item active"
// let classes = c1 + '' + c2
// let classesNew = `${s.item} ${s.active}`

// <div className={`${s.item} ${s.active}`}>

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='./news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='./music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='./settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;