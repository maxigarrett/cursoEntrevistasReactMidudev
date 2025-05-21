import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap";
import "./App.css";
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowIcon } from "./components/icons";
import { LanguagesSelected } from "./components/LanguagesSelected";
import { SectionType } from "./types.d";
import { TextArea } from "./components/TextArea";

function App() {
  const {
    state,
    interchangeLanguages,
    setFromLangguages,
    setToLangguages,
    setFromText,
    setResult,
  } = useStore();

  return (
    <>
      <Container fluid>
        <h1>google traslate </h1>

        <Row>
          <Col>
            {/*from*/}
            <Stack gap={2}>
              <LanguagesSelected
                value={state.fromLanguage}
                type={SectionType.From}
                onChange={setFromLangguages}
              />
              <TextArea
                value={state.fromText}
                type={SectionType.From}
                placeholder="texto"
                onChange={setFromText}
              />
              {/* {state.fromLanguage} */}
            </Stack>
          </Col>

          <Col xs="auto">
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
            <Stack gap={2}>
              <LanguagesSelected
                value={state.toLanguage}
                type={SectionType.To}
                onChange={setToLangguages}
              />
              <TextArea
                value={state.result}
                type={SectionType.To}
                placeholder="traducir"
                onChange={setResult}
                loading={true}
              />
            </Stack>
            {/* {state.toLanguage} */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
