import React from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../services/actions/user-action";
import {NavLink} from "react-router-dom";
import styles from "./profile-navigation.module.css"
import {Dispatch} from "redux";
const ProfileNavigation = () => {
    const dispatch: Dispatch = useDispatch();
    const onLogoutHandler:() => void = () => {
        // @ts-ignore
        dispatch(logout())
    }
    return (
        <div className={styles.nav_wrapper} >
            <nav className={`mb-20 ${styles.nav}`} >
                <ul className={styles.nav_list}>
                    <li className={`text text_type_main-medium ${styles.nav_item}`}>
                        <NavLink className={({isActive}) => isActive ? styles.active_link : styles.link} to={"/profile"} >Профиль</NavLink>
                    </li>
                    <li className={`text text_type_main-medium ${styles.nav_item}`}>
                        <NavLink className={({isActive}) => isActive ? styles.active_link : styles.link} to={"/profile/orders/:number"} >История заказов</NavLink>
                    </li>
                    <li className={`text text_type_main-medium ${styles.nav_item}`} onClick={onLogoutHandler}>
                        Выход
                    </li>
                </ul>
            </nav>
            <div className={"text text_type_main-small"}>
                В этом разделе вы можете изменить свои персональные данные
            </div>
        </div>

    );
};

export default ProfileNavigation;
