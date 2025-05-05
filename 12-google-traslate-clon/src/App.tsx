import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useReducer } from "react";
import { Action, StateInitial } from "./types";

const initialState: StateInitial = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromTexto: "",
  result: "",
  loading: false,
};

const reducer = (state: StateInitial, action: Action) => {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }
  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }
  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }
  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: false,
      fromTexto: action.payload,
    };
  }
  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="App">
        <h1>google traslate </h1>
        <button onClick={() => dispatch({ type: "INTERCHANGE_LANGUAGES" })}>
          cambiar a español
        </button>
        <p>{JSON.stringify(state)}</p>
      </div>
    </>
  );
}

export default App;
