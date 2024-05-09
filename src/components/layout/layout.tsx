import React, {FC, ReactNode, useEffect} from 'react';
import styles from "../app.module.css";
import AppHeader from "../app-header/app-header";
import {getIngredients} from "../../services/actions/data-action";
import {useDispatch} from "../../services/types/store-and-thunk-types";

interface LayoutProps {
    children: ReactNode
}
const Layout: FC<LayoutProps> = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
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
