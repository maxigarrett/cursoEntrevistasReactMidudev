import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowIcon } from "./components/icons";
import { LanguagesSelected } from "./components/LanguagesSelected";

function App() {
  const { state, interchangeLanguages, setFromLangguages, setToLangguages } =
    useStore();
  return (
    <>
      <Container fluid>
        <h1>google traslate </h1>

        <Row>
          <Col>
            {/*from*/}
            <LanguagesSelected
              value={state.fromLanguage}
              type="from"
              onChange={setFromLangguages}
            />
            {state.fromLanguage}
          </Col>

          <Col>
            <Button
              variant="link"
              disabled={state.fromLanguage === AUTO_LANGUAGE}
              onClick={interchangeLanguages}
            >
              <ArrowIcon />
            </Button>
          </Col>

          <Col>
            {/*TO*/}
            <LanguagesSelected
              value={state.toLanguage}
              type="to"
              onChange={setToLangguages}
            />
            {state.toLanguage}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
