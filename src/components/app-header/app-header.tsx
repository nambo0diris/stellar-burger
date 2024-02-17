import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
    return (
        <header className="p-4" >
            <div className="container" style={{maxWidth:"1240px", display:"flex", position:"relative", margin:"auto"}}>
                <button className={"pr-5 pl-5 pb-4 pt-4"} style={{cursor:"pointer",color:"white",background:"transparent",outline:"none",border:"none",display:"flex", alignItems:"center", gap:"8px",}}>
                    <BurgerIcon type="primary" />
                    <span className={"text text_type_main-small"}>Конструктор</span>
                </button>
                <button className={"pr-5 pl-5 pb-4 pt-4"} style={{cursor:"pointer",color:"white",background:"transparent",outline:"none",border:"none",display:"flex", alignItems:"center", gap:"8px",marginRight:"auto"}}>
                    <ListIcon type="primary" />
                    <span className={"text text_type_main-small"}>Лента заказов</span>
                </button>
                <div style={{cursor:"pointer", position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)"}}>
                    <Logo />
                </div>
                <button className={"pr-5 pl-5 pb-4 pt-4"} style={{cursor:"pointer",color:"white",background:"transparent",outline:"none",border:"none",display:"flex", alignItems:"center", gap:"8px",marginLeft:"auto"}}>
                    <ProfileIcon type="primary" />
                    <span className={"text text_type_main-small"}>Лента заказов</span>
                </button>
            </div>
        </header>
    );
};

export default AppHeader;