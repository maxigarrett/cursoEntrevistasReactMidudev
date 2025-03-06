import { useState, useEffect } from "react";

function App() {
  const FollowMouse = () => {
    const [enable, setEnable] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleClick = () => {
      setEnable((prevEnable) => !prevEnable);
    };

    //efecto para activar el seguimiento del puntero con un circulo
    useEffect(() => {
      const handleMove = (event) => {
        const { clientX, clientY } = event; //obtenemos la posicion del puntero
        setPosition({ x: clientX, y: clientY });
      };
      if (enable === true) {
        //le pasamos la funcion handleMove al evento de mover el mouse
        window.addEventListener("pointermove", handleMove);
      }

      //limpiamos para desactive el addEventlistener
      return () => {
        window.removeEventListener("pointermove", handleMove);
      };
    }, [enable]);

    return (
      <>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#09f",
            borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px,${position.y}px)`,
          }}
        ></div>
        <button onClick={handleClick}>
          {enable ? "desactivar" : "activar"} seguir puntero
        </button>
      </>
    );
  };

  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
