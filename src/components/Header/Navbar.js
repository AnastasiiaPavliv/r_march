import React from 'react';

import {NavLink} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";
import css from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={css.Navbar} >
        <NavLink to={AppRoutes.MAIN}>MAIN</NavLink>
        <NavLink to={AppRoutes.USERS}>USERS</NavLink>
        <NavLink to={AppRoutes.COMMENTS}>COMMENTS</NavLink>
        <NavLink to={AppRoutes.POSTS}>POSTS</NavLink>
        </div>
    );
};

export {Navbar};