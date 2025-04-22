import { useEffect, useState } from "react";
import "./App.css";
import { EVENT } from "./const";
import HomePage from "./pages/Home";
import About from "./pages/About";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);

    window.addEventListener(EVENT.PUSHSTATE, onLocationChange);

    window.addEventListener(EVENT.POPSTATE, onLocationChange);

    return () => {
      window.addEventListener(EVENT.PUSHSTATE, onLocationChange);
      window.addEventListener(EVENT.POPSTATE, onLocationChange);
    };
  }, []);

  // return <main>{currentPath === "/home" ? <HomePage /> : <About />}</main>;
  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <About />}
    </main>
  );
}

export default App;
