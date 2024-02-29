import React from "react";

export interface OrderDetailsInterface {
    name: string | null,
    success: boolean | null,
    order: {
        number: number | null
    } | null
}
const initValue = {
    name: null,
    success: null,
    order: {
        number:null
    }
}
export const OrderDetailsContext = React.createContext<OrderDetailsInterface>(initValue);