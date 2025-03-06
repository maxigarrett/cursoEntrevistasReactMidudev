const CAT_ENDPOINT_RAMDOM_FACT = "http://catfact.ninja/fact?limit=1";

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RAMDOM_FACT);    
    const data = await res.json();
    const { fact } = data;
    return fact;  
};