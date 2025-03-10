import { useEffect, useState, useRef } from "react"

export const useSearch=()=>{
    const [search,updateSearch]=useState('')
    const [error, setError] = useState();
    let isFirstRender=useRef(true)

    useEffect(() => {
        //la primera vez entra pero si escribirmos algo el useref pasara a false y ya no validara mas
        //es para que no  aparezca el mensaje de error cuando iniciamos la aplicacion de que ay string vacio
        //al ser false porque ya empezaran a escribir aqui no entrara mas porque search no es igual a ''
        if(isFirstRender.current){
            isFirstRender.current= search===''
            return
        }
        const regex = /^[^\d]/; //valida que no empiece con un numero
        if (search === "") {
    
          setError("debes ingresar una pelicula para buscar");
          return;
        }
        if (!regex.test(search)) {
          setError("no puedes buscar por un numero");
          return;
        }
        if (search?.length < 3) {
          setError("tienes que usar mas de tres letras para la busqueda");
          return;
        }
        setError(null);
      }, [search]);

    return{ search,updateSearch,error}
}