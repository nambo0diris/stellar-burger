import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css';

const AppHeader = () => {
    return (
        <header className="p-4" >
            <nav className={styles.container}>
                <a href={`#`} className={`${styles.burger} pr-5 pl-5 pb-4 pt-4`}>
                    <BurgerIcon type="primary" />
                    <span className={"text text_type_main-small"}>Конструктор</span>
                </a>
                <a href={`#`} className={`${styles.orders} pr-5 pl-5 pb-4 pt-4`}>
                    <ListIcon type="primary" />
                    <span className={"text text_type_main-small"}>Лента заказов</span>
                </a>
                <a href={`/`} className={`${styles.logo}`}>
                    <Logo />
                </a>
                <a href={`#`} className={`${styles.personal} pr-5 pl-5 pb-4 pt-4`}>
                    <ProfileIcon type="primary" />
                    <span className={"text text_type_main-small"}>Личный кабинет</span>
                </a>
            </nav>
        </header>
    );
};

export default AppHeader;