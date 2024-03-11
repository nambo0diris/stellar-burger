import React, {FC, Key, useRef} from 'react';
import styles from "../burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {ProductWithUUID} from "../../../interfaces/interfaces";
import {ADD_SELECTED_INGREDIENTS, INGREDIENT_MOVE} from "../../../services/actions/constructor-action";

interface FillingElementProps {
    ingredient: ProductWithUUID,
    index: number
}
const FillingElement:FC<FillingElementProps> = ({ingredient, index}) => {
    const id = ingredient._id;
    // @ts-ignore
    const {selectedIngredients} = useSelector(state => state.constructorReducer);
    const dispatch = useDispatch();
    const deleteItemHandler = (id:Key | null | undefined) => {
        const updatedIngredients = selectedIngredients.ingredients.filter((ingredient: ProductWithUUID) => {
            if(ingredient.uuid!==id){
                return ingredient
            }
        })
        dispatch({type:ADD_SELECTED_INGREDIENTS, selectedIngredients: {ingredients:[...updatedIngredients], bun: [...selectedIngredients.bun]}});
    }


    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: "filling",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            // @ts-ignore
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            // @ts-ignore
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset()
            // @ts-ignore
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch({type: INGREDIENT_MOVE, dragIndex, hoverIndex})
            // @ts-ignore
            item.index = hoverIndex;
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: "filling",
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    drag(drop(ref));



    return (
        <div ref={ref} data-handler-id={handlerId} key={ingredient.uuid} className={`${styles.constructor_line}`}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingredient.name}
                price={50}
                thumbnail={ingredient.image}
                handleClose={()=>{deleteItemHandler(ingredient.uuid)}}
            />
        </div>
    );
};

export default FillingElement;