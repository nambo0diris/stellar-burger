import React, {FC} from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ParsedDataProps} from "../../interfaces/interfaces";

interface BurgerConstructorProps {
    data: ParsedDataProps,
    removeProduct: (id:string)=>void
}
const BurgerConstructor:FC<BurgerConstructorProps> = ({data, removeProduct}) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{display:"flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={data.bun[0].image}
                    />
                </div>
                <div style={{height:"464px", overflowY:"scroll", display:"flex", flexDirection:"column", gap:"16px",marginRight:"-16px"}}>

                    <div style={{display:"flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div style={{display:"flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div style={{display:"flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div style={{display:"flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div style={{display:"flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div style={{display:"flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                    <div style={{display:"flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={data.main[0].image}
                        />
                    </div>
                </div>
                <div style={{display:"flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={data.bun[0].image}
                    />
                </div>
            </div>
            <div className={"mt-10 mb-10"} style={{display:"flex", gap:"40px", alignItems:"center", marginLeft:"auto"}}>
                <div className="total" style={{display:"flex", gap:"8px", alignItems:"center", marginLeft:"auto"}}>
                    <div className={"text text_type_digits-medium"}>122</div>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </>
    );
};

export default BurgerConstructor;