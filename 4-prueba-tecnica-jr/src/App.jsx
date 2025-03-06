import { useState, useEffect } from "react";
//esta url viene con todo menos con la parte de &json=true se la agregamos nosotros como nos marcaba en la api para
//que nos den la imagenen en un obj almacenado en una variable URL
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${fistWord}?fontSize=50&fontColor=red&json=true `;
const CAT_ENDPOINT_RAMDOM_FACT = "http://catfact.ninja/fact?limit=1";

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [catchError, setCatchError] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDOM_FACT)
      .then((res) => {
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: `error fetching ${res.statusText}`,
          };
        }
        return res.json();
      })
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      })
      .catch((err) => {
        //captura tanto si hay error en respuesta como en peticion
        setCatchError(err);
        console.log(catchError);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ").slice(0, 3).join(" ");
    // console.log(firstWord);
    fetch(
      `https://cataas.com/cat/says/${firstWord}?fontSize=40&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
        console.log(url);
      });
  }, [fact]);

  return (
    <>
      <main>
        <h1>AP de gatitos</h1>
        <section>
          <div>
            {fact && <p>{fact}</p>}
            {imageUrl && (
              <img src={imageUrl} alt={`image stracted from ${fact}`} />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
