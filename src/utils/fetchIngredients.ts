export const fetchIngredients = async (url:string) => {
    try {
        const response = await fetch(url);
        const toJSON = await response.json();
        return toJSON.data;
    } catch (error) {
        throw error;
    }
}