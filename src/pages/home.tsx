import React from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

const Home = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <section>
                <h1 className={"text text_type_main-large  mt-10 mb-5"}>Соберите бургер</h1>
                <BurgerIngredients/>
            </section>
            <section className={"pt-25 pl-4 pr-4"}>
                <BurgerConstructor />
            </section>
        </DndProvider>
    );
};

export default Home;
