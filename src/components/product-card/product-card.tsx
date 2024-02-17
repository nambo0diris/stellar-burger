import React, {FC} from 'react';
import {ProductCardProps} from "../../interfaces/interfaces";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";

const ProductCard: FC<ProductCardProps> = ({_id, price, name, image, addProduct}) => {
    return (
        <div className={"mb-3"} style={{cursor:"pointer",position:"relative",display:"flex",flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"}} onClick={()=>{addProduct(_id)}}>
            <img src={image} alt="" className={"ml-4 mr-4"}/>
            <div className={"text text_type_digits-default mt-1 mb-1"} >{price}</div>
            <div className={"text text_type_main-small"}>{name}</div>
            <Counter count={233} size="small" />
        </div>
    )
}

export default ProductCard;