import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <div className={s.header}>
        <NavLink to='/'>
            Quiz App
        </NavLink>
    </div>;
}

export default Header;
