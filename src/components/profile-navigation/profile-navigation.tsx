import React from 'react';
import {logout} from "../../services/actions/user-action";
import {NavLink} from "react-router-dom";
import styles from "./profile-navigation.module.css"
import {useDispatch} from "../../services/types/store-and-thunk-types";
const ProfileNavigation = () => {
    const dispatch = useDispatch();
    const onLogoutHandler:() => void = () => {
        dispatch(logout())
    }
    return (
        <div className={styles.nav_wrapper} >
            <nav className={`mb-20 ${styles.nav}`} >
                <ul className={styles.nav_list}>
                    <li className={`text text_type_main-medium ${styles.nav_item}`}>
                        <NavLink className={({isActive}) => isActive ?  styles.link : styles.active_link} to={"/profile"} >Профиль</NavLink>
                    </li>
                    <li className={`text text_type_main-medium ${styles.nav_item}`}>
                        <NavLink className={({isActive}) => isActive ? styles.link : styles.active_link} to={"/profile/orders/"} >История заказов</NavLink>
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
