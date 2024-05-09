import React, {Key, MouseEventHandler, ReactNode, SyntheticEvent} from "react";

export interface Product {
    calories: number
    carbohydrates: number
    fat: number
    image: string
    image_large: string
    image_mobile: string
    name: string
    price: number
    proteins: number
    type: string
    __v:number
    _id?: string,
    id?:string
}
export interface ProductWithUUID extends Product {
    uuid: Key | null | undefined
}

export interface ISelectedIngredients {
    bun: ProductWithUUID [],
    ingredients: ProductWithUUID []
}
export interface ProductCardProps {
    product: Product
}
export interface CategoryWrapperProps {
    type: "bun" | "sauce" | "main",
    products: Product[]
    innerRef: (node?: (Element | null | undefined)) => void
}
export interface ParsedDataProps {
    [key: string]: Product[]
}

export interface IMakeOrderData {
    name: string,
    success: boolean,
    order: IOrderTypes
}
export interface ModalOverlayProps {
    children: ReactNode
    onOverlayClick:(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export interface IOrderTypes {
    _id: string;
    name: string;
    ingredients: Array<string | null>;
    number: number;
    status: string;
    visibleStatus?: boolean;
    updatedAt: string;
    createdAt: string;
    page?: string;
}
