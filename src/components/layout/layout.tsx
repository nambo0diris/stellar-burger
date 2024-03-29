import React, {FC, ReactElement, useEffect} from 'react';
import styles from "../app.module.css";
import AppHeader from "../app-header/app-header";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/data-action";

interface LayoutProps {
    children: ReactElement | ReactElement[]
}
const Layout: FC<LayoutProps> = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(getIngredients())
    },[dispatch])
    return (
        <div className={styles.App}>
            <AppHeader />
            <main className="pl-4 pr-4">
                <div className={styles.container}>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;