import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css';
import {NavLink} from "react-router-dom";

const AppHeader = () => {
    return (
        <header className="p-4" >
            <nav className={styles.container}>
                <NavLink to={`/`} className={`${styles.burger} pr-5 pb-4 pt-4`}>
                    <BurgerIcon type="primary" />
                    <span className={"text text_type_main-small"}>Конструктор</span>
                </NavLink>
                <NavLink to={`/feed/`} className={`${styles.orders} pr-5 pl-5 pb-4 pt-4`}>
                    <ListIcon type="primary" />
                    <span className={"text text_type_main-small"}>Лента заказов</span>
                </NavLink>
                <NavLink to={`/`} className={`${styles.logo}`}>
                    <Logo />
                </NavLink>
                <NavLink to={`/profile`} className={`${styles.personal} pr-5 pl-5 pb-4 pt-4`}>
                    <ProfileIcon type="primary" />
                    <span className={"text text_type_main-small"}>Личный кабинет</span>
                </NavLink>
            </nav>
        </header>
    );
};

export default AppHeader;
