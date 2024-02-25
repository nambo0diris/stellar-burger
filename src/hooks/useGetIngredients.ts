import {useEffect, useRef, useState} from "react";
import {fetchIngredients} from "../utils/fetchIngredients";
import {config} from "../config";

export const useGetIngredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const fetchData = async () => {
        setLoading(true);
        setError(false);
        try {
            const result = await fetchIngredients(config.apiURL);
            setIngredients(result);
            setLoading(false);
        } catch (e) {
            setError(true);
            setLoading(false);
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData();
    },[]);

    return {
        ingredients,
        isLoading,
        isError
    }
}