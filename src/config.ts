interface UrlConfig {
    baseAPIUrl: string,
    resetPasswordEndpoint: string,
    savePasswordEndpoint: string,
    productsEndpoint: string,
    orderDetailsEndpoint: string,
    getUserEndpoint: string,
    loginEndpoint: string,
    logoutEndpoint: string,
    registerEndpoint: string,
    refreshTokenEndpoint: string,

}
export const config: UrlConfig = {
    baseAPIUrl: process.env.REACT_APP_BASE_API_URL || 'https://norma.nomoreparties.space/api/',
    resetPasswordEndpoint: 'password-reset',
    savePasswordEndpoint: 'password-reset/reset',
    productsEndpoint: 'ingredients',
    orderDetailsEndpoint: 'orders',
    getUserEndpoint: 'auth/user',
    loginEndpoint: 'auth/login',
    logoutEndpoint: 'auth/logout',
    registerEndpoint: 'auth/register',
    refreshTokenEndpoint: 'auth/token',
}
