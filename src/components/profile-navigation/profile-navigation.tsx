import React from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../services/actions/user-action";
import {NavLink} from "react-router-dom";
import styles from "./profile-navigation.module.css"
const ProfileNavigation = () => {
    const dispatch = useDispatch();
    const onLogoutHandler = () => {
        // @ts-ignore
        dispatch(logout())
    }
    return (
        <nav className={"mb-20"} style={{width:"320px"}}>
            <ul style={{listStyleType:"none", padding:0, margin:0}}>
                <li className={"text text_type_main-medium"} style={{height:"64px", display:"flex", alignItems:"center"}}>
                    <NavLink className={({isActive}) => isActive ? styles.active_link : styles.link} to={"/profile"} >Профиль</NavLink>
                </li>
                <li className={"text text_type_main-medium"} style={{height:"64px", display:"flex", alignItems:"center"}}>
                    <NavLink className={({isActive}) => isActive ? styles.active_link : styles.link} to={"/profile/orders/:number"} >История заказов</NavLink>
                </li>
                <li className={`text text_type_main-medium ${styles.link}`} style={{height:"64px", display:"flex", alignItems:"center"}} onClick={onLogoutHandler}>
                    Выход
                </li>
            </ul>
        </nav>
    );
};

export default ProfileNavigation;
