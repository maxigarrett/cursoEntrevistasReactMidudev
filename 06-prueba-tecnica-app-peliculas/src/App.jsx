// import { useState } from "react";

import { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { mappedMovies } = useMovies();
  const [query, setQuery] = useState();
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // AL GET LE PASAMOS EL NAME DEL InPUT
    // const fields = new window.FormData(event.target);
    // const query = fields.get("queryMovie");

    //otra forma de hacerlo si tuvieramos muchos inputs
    //destructuramos con el nombre que le pusimosal NAME del input
    //si le sacamos la destructuracion creara un objeto con el name y valor de cada input creado
    // y podremos crear muchos input y se ira creado un obj a medida queescribamos en losimput
    // const { queryMovie } = Object.fromEntries(
    //   new window.FormData(event.target)
    // );
    console.log({ query });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  useEffect(() => {
    const regex = /^[^\d]/; //valida que no empiece con un numero
    if (query === "") {
      setError("debes ingresar una pelicula para buscar");
      return;
    }
    if (!regex.test(query)) {
      setError("no puedes buscar por un numero");
      return;
    }
    if (query?.length < 3) {
      setError("tienes que usar mas de tres letras para la busqueda");
      return;
    }
  }, [query]);
  return (
    <div className="page">
      <header>
        <h1>buscador de peliculas</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="queryMovie"
            type="text"
            placeholder="....search movies"
          />
          <button type="submit">Searc</button>
          <span>{error}</span>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
