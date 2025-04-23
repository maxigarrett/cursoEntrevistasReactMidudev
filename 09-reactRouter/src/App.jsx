import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { Router } from "./Router";
import Pages404 from "./pages/404";
//IMPORTANTE
//esta app esta echa sin REACT ROUTER DOM sino manualmente con fines didacticos

//EXTRACION DE ROUTER
const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/search/:query",
    Component: () => <h1>search</h1>,
  },
];

function App() {
  // return <main>{currentPath === "/home" ? <HomePage /> : <About />}</main>;
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Pages404} />
    </main>
  );
}

export default App;

//agregrar al commit cambo de nombre del about y creacion de rutasde mejor manera sin el hook
