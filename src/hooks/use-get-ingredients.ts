import {useEffect, useState} from "react";
import {fetchData} from "../utils/fetch-data";

export const useGetIngredients = (url: string, body?:any) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const makeFetch = async () => {
        setLoading(true);
        setError(false);
        try {
            const result = await fetchData(url, body);
            setData(result.data);
            setLoading(false);
        } catch (e) {
            setError(true);
            setLoading(false);
            console.log(e)
        }
    }

    useEffect(() => {

        makeFetch();
    },[]);

    return {
        data,
        isLoading,
        isError
    }
}