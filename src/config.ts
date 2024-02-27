interface UrlConfig {
    apiURL: string
}
export const config: UrlConfig = {
    apiURL: process.env.REACT_APP_API_URL || 'https://norma.nomoreparties.space/api/ingredients'
}