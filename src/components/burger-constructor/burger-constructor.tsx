import React, {FC, useState} from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ParsedDataProps} from "../../interfaces/interfaces";
import styles from "./burger-constructor.module.css"
import OrderDetails from "../modals/order-details/order-details";
interface BurgerConstructorProps {
    data: ParsedDataProps,
    removeProduct: (id: string) => void
}
const BurgerConstructor:FC<BurgerConstructorProps> = ({data, removeProduct}) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const toCloseModal = () => {
        setOpen(false)
    }

    const makeOderHandler = () => {
        setOpen(true)
    }

    return (
        <>
            <div className={`${styles.constructor_wrapper}`}>
                <div className={`${styles.constructor_line}`}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={data.bun[0].name}
                        price={200}
                        thumbnail={data.bun[0].image}
                    />
                </div>
                <div style={{height:"464px", overflowY:"scroll", display:"flex", flexDirection:"column", gap:"16px",marginRight:"-16px"}}>
                    <div className={`${styles.constructor_line}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data.main[0].name}
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div className={`${styles.constructor_line}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data.main[0].name}
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div className={`${styles.constructor_line}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data.main[0].name}
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div className={`${styles.constructor_line}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data.main[0].name}
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div className={`${styles.constructor_line}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data.main[0].name}
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div className={`${styles.constructor_line}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data.main[0].name}
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div className={`${styles.constructor_line}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data.main[0].name}
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                </div>
                <div className={`${styles.constructor_line}`}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={data.bun[0].name}
                        price={200}
                        thumbnail={data.bun[0].image}
                    />
                </div>
            </div>
            <div className={`${styles.constructor_footer} mt-10 mb-10`}>
                <div className={`${styles.total}`}>
                    <div className={"text text_type_digits-medium"}>122</div>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="large" onClick={makeOderHandler}>
                    Оформить заказ
                </Button>
            </div>
            {isOpen && <OrderDetails toCloseModal={toCloseModal}/>}
        </>
    );
};

export default BurgerConstructor;