export const fetchIngredients = async (url:string) => {
    try {
        const response = await fetch(url);
        if (!response.ok || response.status!==200) {
            throw new Error("Что-то пошло не так...Попробуйте перезагрузить страницу или обратитесь в поддержку.");
        }
        const toJSON = await response.json();
        return toJSON.data;
    } catch (error) {
        throw error;
    }
}