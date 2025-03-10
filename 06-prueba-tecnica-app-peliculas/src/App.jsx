// import { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, error, updateSearch } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  //si hay un error agrega una clase al input
  const classNameInput = error ? "errorSearch" : "";

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
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
  };

  const handleChange = (e) => {
    //es mejor guardar primero  en variable el valor ya que es asincrono puede traer errores o bugs.
    const newQuery = e.target.value;
    updateSearch(newQuery); //actualiza el  earch que tenemos en el hook para mostrar mensaje
  };

  return (
    <div className="page">
      <header>
        <h1>buscador de peliculas</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className={classNameInput}
            onChange={handleChange}
            name="queryMovie"
            type="text"
            placeholder="....search movies"
            value={search}
          />
          <button type="submit">Searc</button>
        </form>
      </header>
      {error && <span className="errorSearch">{error}</span>}

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
