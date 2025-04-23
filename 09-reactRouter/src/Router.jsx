import { useEffect, useState } from "react";
import { EVENT } from "./const";
import { match } from "path-to-regexp";
export const Router = ({ routes = [], defaultComponent: DefaultComponent }) => {
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

  //si en las ruta que le pasamos(el path de routes) coincide la actual ruta(currentPath) extraemos
  //el Component de routes con '.Componen' alfinal de todo.
  //dentro de Pages se  guarda el componente HomePages o About
  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    //ver si la URL hizo match
    match(path, { decode: decodeURIComponent });
  })?.Component;

  return Page ? <Page /> : <DefaultComponent />;
};
