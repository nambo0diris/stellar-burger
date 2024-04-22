import React, {FC, ReactElement} from "react";
import {CategoryWrapperProps, Product} from "../../../interfaces/interfaces";
import ProductCard from "../../product-card/product-card";
import styles from "./category-wrapper.module.css"

enum IDict {
    bun = "Булка",
    main = "Начинка",
    sauce = "Соус"
}

const CategoryWrapper: FC<CategoryWrapperProps> = ({innerRef, type, products}) => {
    const title:IDict = IDict[type];

    return (
        <div className={"mb-10"} id={type} ref={innerRef}>
            <div className={"text text_type_main-medium"}>{title}</div>
            <div className={`${styles.products_card_wrapper}`}>
                {
                    products.map((product:Product):ReactElement => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}
export default CategoryWrapper;
