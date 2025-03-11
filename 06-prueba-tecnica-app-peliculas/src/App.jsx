import { useCallback, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { OrbitProgress } from "react-loading-indicators";
import debounce from "just-debounce-it";
function App() {
  const [sort, setSort] = useState(false);
  //solo actualizamos el serach de este ook para los mensajes de error ya q elsearch que lepasamos a los hooks se lo pasamos por parametros
  //a las funciones de los hooks que tienen internamente en este caso getMoives que le pasasmos el valor del input para hacer peticiones a la API
  const { error, updateSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({ sort });

  //este debounce es para que espere unos milisegundos antes de hacer la busqueda en el onchange porque
  //al ir escribiendo se van realizando peticiones y puede que una se resuelva mas rapido que otra y traiga resultados diferentes
  //por eso hacemos que espere unos segundos antes de hacer la busqueda y solo buscara lo ultimo que tipeo en el input del usuario
  // y usamos un usecallback para que recuerde esta funcion y no renderice constantemente ya que cada tipeo que icimos
  //las buscara de golpe luego de esos ms de espera, por eso usamos el usecallback para que no renderice el mismo compoenente
  //cada vez que tipeamos
  const debounceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );
  //si hay un error agrega una clase al input
  const classNameInput = error ? "errorSearch" : "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuery = event.target[0].value;
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
    // updateSearch(queryMovie)
    getMovies({ search: newQuery });
  };

  const handleChange = (e) => {
    //es mejor guardar primero  en variable el valor ya que es asincrono puede traer errores o bugs.
    const newQuery = e.target.value;
    updateSearch(newQuery); //actualiza el search que tenemos en el hook para mostrar mensaje
    debounceGetMovies(newQuery);
  };

  const handleSort = () => {
    setSort((sort) => !sort);
    console.log(sort);
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
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Searc</button>
        </form>
      </header>
      {error && <span className="errorSearch">{error}</span>}

      <main>
        {loading ? (
          <OrbitProgress
            dense
            color="azure"
            size="medium"
            text=""
            textColor=""
          />
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </div>
  );
}

export default App;
