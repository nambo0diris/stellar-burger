interface UrlConfig {
    productsAPI: string,
    orderDetails: string
}
export const config: UrlConfig = {
    productsAPI: process.env.REACT_APP_PRODUCTS_API_URL || 'https://norma.nomoreparties.space/api/ingredients',
    orderDetails: process.env.REACT_APP_ORDER_DETAILS_API_URL || 'https://norma.nomoreparties.space/api/orders'
}