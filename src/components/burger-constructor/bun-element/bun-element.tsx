import React, {FC} from 'react';
import styles from "../burger-constructor.module.css";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerLayer from "../burger-layer";
import {useSelector} from "../../../services/types/store-and-thunk-types";
export interface BunElementProps {
    type:"top" | "bottom"
}
const BunElement: FC<BunElementProps> = ({type}) => {
    const {selectedIngredients} = useSelector(state => state.constructorReducer);
    return (
       <>
           {
               selectedIngredients.bun.length ?
                   <div className={`${styles.constructor_line} ${styles.constructor_line__bun}`}>
                       <ConstructorElement
                           type={type}
                           isLocked={true}
                           text={`${selectedIngredients.bun[0].name} ${type==="top"?"верх":"низ"}`}
                           price={200}
                           thumbnail={selectedIngredients.bun[0].image}
                       />
                   </div>
                   :
                   <div className={`${styles.constructor_line}`}>
                       <BurgerLayer position={type}/>
                   </div>
           }
       </>
    );
};

export default BunElement;
