import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {
    const [fact, setFact] = useState();
 
    const refreshFact = () => {
     //carpeta services para hacer la peticiones fetch
     getRandomFact().then((data) => setFact(data));
    };
    useEffect(() => {
        refreshFact();
    }, []);
 
    return { fact, refreshFact };
};