import React from 'react';
import {NavLink} from "react-router-dom";
import {AppRouter} from "../../routing/AppRouter";
import css from './Header.module.css'

import {Component} from "react";

class Header extends Component {
    render() {
        return (
            <div className={css.Header}>
                <NavLink to={AppRouter.MAIN}>MAIN</NavLink>
                <NavLink to={AppRouter.POSTS}>POSTS</NavLink>
                <NavLink to={AppRouter.COMMENTS}>COMMENTS</NavLink>
                <NavLink to={AppRouter.CARS}>CARS</NavLink>
            </div>
        )
    }
}

export {Header}
// const Header = () => {
//     return (
//         <div className={css.Header}>
//             <NavLink to={AppRouter.MAIN}>MAIN</NavLink>
//             <NavLink to={AppRouter.POSTS}>POSTS</NavLink>
//             <NavLink to={AppRouter.COMMENTS}>COMMENTS</NavLink>
//             <NavLink to={AppRouter.CARS}>CARS</NavLink>
//         </div>
//     );
// };
//
// export {Header};
