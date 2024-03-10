import React, {useEffect} from 'react';
import './App.css';
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import AppHeader from "./components/app-header/app-header";
import {getIngredients} from "./services/actions/data-action";
import {useDispatch} from "react-redux";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    // @ts-ignore
    dispatch(getIngredients())
  },[dispatch])


  return (
    <div className="App">
      <AppHeader />
      <main className="pl-4 pr-4">
        <div className="container">
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
