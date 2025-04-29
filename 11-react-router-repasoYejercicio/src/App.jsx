import "./App.css";
import {
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
  NavLink,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "./useAuth";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};
const SearchPage = () => {
  const tacos = ["cochinita", "chili", "carnita", "quesadilla"];
  return (
    <>
      <h1>Search Page</h1>
      <ul>
        {tacos.map((el) => (
          <li key={el}>
            <Link to={`/tacos/${el}`}>{el}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
const Tacos = () => {
  const { nombreDelTaco } = useParams();
  console.log(nombreDelTaco);
  return (
    <>
      <h4>Tacos {nombreDelTaco}</h4>
      <Link to="details">ir a detalles</Link>
      <Outlet />
    </>
  );
};

const TacoDetails = () => {
  const { nombreDelTaco } = useParams();
  return (
    <>
      <h2>detalles del taco {nombreDelTaco}</h2>
    </>
  );
};
//uso de useNavigate
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  //en el navigate del login  tiene una prop state que le pasa un LOCATION a la hora de forzar la redirrecion a login
  //porque no esta logueado. nosotros en ese componente podemos capturar esa informacion
  const location = useLocation();
  console.log(location.state.location.pathname);
  const pathName = location.state.location.pathname;
  const handleClick = () => {
    login();
    // navigate("/search-pages"); //redireccionamos a la fuerza
    navigate(pathName);
  };
  return (
    <>
      <button onClick={handleClick}>Login</button>
    </>
  );
};
const TacoIndex = () => {
  return (
    <>
      <h2>taco index</h2>
    </>
  );
};

const ProtectedRout = ({ children }) => {
  const { isAuthenticate } = useAuth();
  const location = useLocation(); //obj donde contiene toda la info de la url donde se encuentra el usuario en ese momento

  if (!isAuthenticate) {
    //IMPORTANT:aunque si no estamos logueados no redirija al login. pero el location captura en el PATHNAME al le direccion que quiero dirigirme
    return <Navigate to="/login" state={{ location }} />; //podemos enviarle IMG,lo que queramos literal dentro de este Obj y lo capturamos en component LOGIN
  }
  return children;
};

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "is-active" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link to="/search-pages">Search</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search-pages"
          element={
            <ProtectedRout>
              {/*este es el children de protectedRoute*/}
              <SearchPage />
            </ProtectedRout>
          }
        />
        <Route
          path="/tacos/:nombreDelTaco"
          element={
            <ProtectedRout>
              <Tacos />
            </ProtectedRout>
          }
        >
          <Route index element={<TacoIndex />} />
          <Route path="details" element={<TacoDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<h3>error 404</h3>} />
      </Routes>
    </>
  );
}

export default App;
