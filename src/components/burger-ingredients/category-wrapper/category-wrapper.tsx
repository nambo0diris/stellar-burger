import React, {FC} from "react";
import {CategoryWrapperProps, Product} from "../../../interfaces/interfaces";
import ProductCard from "../../product-card/product-card";
import styles from "./category-wrapper.module.css"
const CategoryWrapper: FC<CategoryWrapperProps> = ({type, products}) => {
    const dict = {
        bun: "Булка",
        main: "Начинка",
        sauce: "Соус"
    }
    const title: string = dict[type as keyof typeof dict];
    return (
        <div className={"mb-10"} id={type}>
            <div className={"text text_type_main-medium"}>{title}</div>
            <div className={`${styles.products_card_wrapper}`}>
                {
                    products.map((product:Product) => {
                        return (
                            <ProductCard key={product._id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CategoryWrapper;