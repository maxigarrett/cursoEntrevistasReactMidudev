import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <>
      <main>
        <h1>AP de gatitos</h1>
        <button onClick={handleClick}>get new fact</button>
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
