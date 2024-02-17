import React, {FC} from "react";
import {CategoryWrapperProps, Product} from "../../../interfaces/interfaces";
import ProductCard from "../../product-card/product-card";

const CategoryWrapper: FC<CategoryWrapperProps> = ({type, products, addProduct}) => {
    const dict = {
        bun: "Булка",
        main: "Начинка",
        sauce: "Соус"
    }
    const title: string = dict[type as keyof typeof dict];

    return (
        <div className={"mb-10"}>
            <div className={"text text_type_main-medium"}>{title}</div>
            <div style={{display: "flex", gap:"24px", flexWrap:"wrap", justifyContent:"center"}}>
                {
                    products.map((product:Product)=>{
                        return (
                            <ProductCard key={product._id} {...product} addProduct={addProduct}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CategoryWrapper;