import React from 'react';
import '../../src/css/header_style.css'
import Image from './Image'
import logo from '../../src/img/header/logo.png'
import user_icon from '../../src/img/header/user_icon.png'

//Сборка шапки сайта
const Header = () => {
    return (
        <header className="menu_headder">
            <div className="header_container">
                <div className="logo_box">
                    <div className="icon">
                        <Image image = {logo} />
                    </div>
                    <div className="text">Мой дом</div>
                </div>
                <div className="user_box">
                    <div className="icon">
                        <Image image = {user_icon} />
                    </div>
                    <div className="user_name">
                        Пеленев Денис Вячеславович
                    </div>
                    <div className='dropdown-content'>
                        <a href='#'>Мой аккаунт</a>
                        <a href='#'>Выйти</a>
                    </div>
                </div>
            </div>
        </header>
    );
  };

  export default Header;