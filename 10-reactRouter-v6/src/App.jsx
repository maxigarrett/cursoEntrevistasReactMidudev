import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/error404";
import { Productos } from "./pages/Productos";
import { ProductosDetalles } from "./pages/ProductosDetalle";
import { useState } from "react";
import { Servicios } from "./pages/Servicios";
import { HomeServicios } from "./pages/HomeServicios";
import { ServiciosGarantia } from "./pages/ServiciosGarantia";
import { ServiciosLista } from "./pages/ServiciosLista";

function App() {
  const initialProductos = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];
  const [productos, _] = useState(initialProductos);

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          {/* redireccionamos a about con NAVIATE  */}
          <Route path="/otraPag" element={<Navigate to="/about" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          />
          {/* ruta dinamica el nombre puede ser cualquiera,en este caso es ID */}
          <Route
            path="/productos/:id"
            element={<ProductosDetalles productos={productos} />}
          />

          {/* SUBRUTAS 
          le pasamos INDEX para que muestre como el hijo que es dentro de <Servicios/>, y vamos anidando rutas*/}
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<HomeServicios />} />
            <Route path="/servicios/garantia" element={<ServiciosGarantia />} />
            {/*en servicios le pasamos al LINK el valor 5 como parametro y lo capturamos en <Serviciosarantaia> dentro de pepe como el valor que tiene aca en route*/}
            <Route path="/servicios/lista/:pepe" element={<ServiciosLista />} />
          </Route>

          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
