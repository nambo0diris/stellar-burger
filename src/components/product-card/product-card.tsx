import React, {FC, SyntheticEvent, useState} from 'react';
import {ProductCardProps} from "../../interfaces/interfaces";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./product-card.module.css"
import IngredientDetails from "../modals/ingredient-details/ingredient-details";
import Modal from "../modals/modal/modal";
const ProductCard: FC<ProductCardProps> = ({product}) => {
        const [isOpen, setOpen] = useState<boolean>(false);
        const toOpenModal = () => {
            setOpen(true)
        }
        const toCloseModal = () => {
            setOpen(false)
        }

        return (
            <>
                <div className={`${styles.product_card} mb-3`} onClick={toOpenModal}>
                    <img src={product.image} alt="" className={"ml-4 mr-4"}/>
                    <div className={"text text_type_digits-default mt-1 mb-1"} >{product.price}</div>
                    <div className={"text text_type_main-small"}>{product.name}</div>
                    <Counter count={233} size="small" />
                </div>
                {
                    isOpen && <Modal title={"Детали ингрединта"} toCloseModal={toCloseModal}>
                                <IngredientDetails product={product}/>
                    </Modal>
                }
            </>
        )
}

export default ProductCard;