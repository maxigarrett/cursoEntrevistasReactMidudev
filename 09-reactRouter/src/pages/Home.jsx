import { Children } from "react";
import { Link } from "./Link";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <p>esta es una pagina bla bla bla bla bla bla bla</p>
        <Link to={"/about"}>about</Link>
      </div>
    </>
  );
}
