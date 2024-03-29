interface UrlConfig {
    productsAPI: string,
    orderDetails: string,
    savePasswordAPI: string,
    resetPasswordAPI :string,
    loginAPI: string,
    logoutAPI: string,
    registerAPI: string,
    refreshTokenAPI: string,
    getUserAPI: string,

}
export const config: UrlConfig = {
    resetPasswordAPI: process.env.REACT_APP_RESET_PASSWORD_API || 'https://norma.nomoreparties.space/api/password-reset',
    savePasswordAPI: process.env.REACT_APP_SAVE_PASSWORD_API || 'https://norma.nomoreparties.space/api/password-reset/reset',
    productsAPI: process.env.REACT_APP_PRODUCTS_API_URL || 'https://norma.nomoreparties.space/api/ingredients',
    orderDetails: process.env.REACT_APP_ORDER_DETAILS_API_URL || 'https://norma.nomoreparties.space/api/orders',
    getUserAPI: process.env.REACT_APP_GET_USER_API_URL || 'https://norma.nomoreparties.space/api/auth/user',
    loginAPI: process.env.REACT_APP_LOGIN_API_URL || 'https://norma.nomoreparties.space/api/auth/login',
    logoutAPI: process.env.REACT_APP_LOGOUT_API_URL || "https://norma.nomoreparties.space/api/auth/logout",
    registerAPI: process.env.REACT_APP_REGISTER_API_URL || 'https://norma.nomoreparties.space/api/auth/register',
    refreshTokenAPI: process.env.REACT_APP_REFRESH_TOKEN_API || 'https://norma.nomoreparties.space/api/auth/token',
}
