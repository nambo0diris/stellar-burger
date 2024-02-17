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
    _id: string
}
export interface ProductCardProps {
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
    _id: string
    addProduct:(id:string)=>void
}
export interface CategoryWrapperProps {
    type: string,
    products: Product[]
    addProduct:(id:string)=>void
}
export interface ParsedDataProps {
    [key: string]: Product[]
}
export interface BurgerIngredientsProps {
    data: ParsedDataProps,
    addProduct:(id:string)=>void
}