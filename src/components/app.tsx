import React, {useEffect} from 'react';
import styles from './app.module.css';

import {useDispatch} from "react-redux";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import AppHeader from "./app-header/app-header";
import {getIngredients} from "../services/actions/data-action";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    // @ts-ignore
    dispatch(getIngredients())
  },[dispatch])


  return (
    <div className={styles.App}>
      <AppHeader />
      <main className="pl-4 pr-4">
        <div className={styles.container}>
          <DndProvider backend={HTML5Backend}>
            <section>
              <h1 className={"text text_type_main-large  mt-10 mb-5"}>Соберите бургер</h1>
              <BurgerIngredients/>
            </section>
            <section className={"pt-25 pl-4 pr-4"}>
              <BurgerConstructor />
            </section>
          </DndProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
