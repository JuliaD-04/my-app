import React from 'react';
import s from'./Navbar.module.css';
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

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href='/dialogs'>Messages</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href='./news'>News</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href='./music'>Music</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href='./settings'>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;