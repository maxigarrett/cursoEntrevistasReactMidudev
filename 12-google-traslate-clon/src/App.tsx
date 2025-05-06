import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { useStore } from "./hooks/useStore";

function App() {
  const { state, interchangeLanguages } = useStore();
  return (
    <>
      <Container fluid>
        <h1>google traslate </h1>
        <Row>
          <Col>
            <h2>from</h2>
            {state.fromLanguage}
          </Col>
          <Col>
            <button onClick={interchangeLanguages}>intercambiar</button>
          </Col>
          <Col>
            <h2>to</h2>
            {state.toLanguage}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
