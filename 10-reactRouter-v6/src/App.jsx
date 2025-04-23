import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const Acerca = () => {
  return (
    <>
      <h2>Acerca</h2>
    </>
  );
};
function App() {
  return (
    <>
      <h1>react router v6</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
