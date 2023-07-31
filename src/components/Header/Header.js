import React from 'react';
import {NavLink} from "react-router-dom";
import {AppRoutes} from "../../routing/AppRoutes";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={AppRoutes.MAIN}>MAIN</NavLink>
            <NavLink to={AppRoutes.USERS}>USERS</NavLink>
            <NavLink to={AppRoutes.COMMENTS}>COMMENTS</NavLink>
        </div>
    );
};

export {Header};