import React, {FC, Key, useRef} from 'react';
import styles from "../burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "../../../services/types/store-and-thunk-types";
import {DropTargetMonitor, useDrag, useDrop, XYCoord} from "react-dnd";
import {ISelectedIngredients, ProductWithUUID} from "../../../interfaces/interfaces";
import {addSelectedIngredientsAction, moveIngredientsAction} from "../../../services/actions/constructor-action";

interface FillingElementProps {
    ingredient: ProductWithUUID,
    index: number
}

interface DragItem {
    id: string,
    index: number
}

const FillingElement:FC<FillingElementProps> = ({ingredient, index}) => {

    const id: string = ingredient._id ? ingredient._id : "";

    const {selectedIngredients} = useSelector(state => state.constructorReducer);
    const dispatch = useDispatch();
    const deleteItemHandler:(id: (React.Key | null | undefined)) => void = (id) => {
        const updatedIngredients: ProductWithUUID[] = selectedIngredients.ingredients.filter((ingredient: ProductWithUUID) => {
            if (ingredient.uuid !== id) {
                return ingredient
            }
        })
        const finalIngredients: ISelectedIngredients = {ingredients:[...updatedIngredients], bun: [...selectedIngredients.bun]}
        dispatch(addSelectedIngredientsAction(finalIngredients));
    }


    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop({
        accept: "filling",
        collect(monitor:DropTargetMonitor<DragItem>) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },


        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect:DOMRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY:number = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset:XYCoord | null = monitor.getClientOffset()

            if (clientOffset !== null) {
                const hoverClientY: number = clientOffset.y - hoverBoundingRect.top
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return;
                }
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return;
                }
            }

            console.log(dragIndex, hoverIndex)
            dispatch(moveIngredientsAction(dragIndex, hoverIndex))
            item.index = hoverIndex;
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: "filling",
        item: ():DragItem => {
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
