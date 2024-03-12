export const fetchData = async (url:string, body?:any) => {
    const bodyStringify = body ? JSON.stringify(body) : null;
    const response = bodyStringify ?
        await fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: bodyStringify
        }) :
        await fetch(url);
    if (!response.ok || response.status!==200) {
        throw new Error("Что-то пошло не так...Попробуйте перезагрузить страницу или обратитесь в поддержку.");
    }

    const toJSON = await response.json();

    return toJSON;
}