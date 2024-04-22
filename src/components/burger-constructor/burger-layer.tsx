import React, {FC} from 'react';
import classNames from "classnames/bind";
import styles from "./burger-layer.module.css"
interface BurgerLayerProps {
    position: "top" | "between" | "bottom"
}
const cx = classNames.bind(styles);

const BurgerLayer: FC<BurgerLayerProps> = ({position}) => {
    const className: string = cx("text text_type_main-small", {
        burger_layer: true,
        top: position==="top",
        between: position==="between",
        bottom: position==="bottom"
    })
    return (
        <div className={className}>
            {
                position ==="top" || position === "bottom" ? "Выберите булки" : "Выберите начинку"
            }
        </div>
    );
};

export default BurgerLayer;
