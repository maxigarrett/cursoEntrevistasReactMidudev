import { useReducer } from "react";
import { Action, FromLanguage, Languages, StateInitial } from "../types";
import { AUTO_LANGUAGE } from "../constants";

export const initialState: StateInitial = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromTexto: "",
  result: "",
  loading: false,
};

export const reducer = (state: StateInitial, action: Action) => {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    if (state.fromLanguage === AUTO_LANGUAGE) return state; //si tiene para detectar idioma automaticamente no permitira intercambiar por ninguno
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

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //MEJOR PRATICA NO ES USAR EL DISPACH DIRECTAMENTE
  // si algun dia se usa otra erramienta ninguno de los componentes tiene que saber solo acer su funcion y ya
  const interchangeLanguages = () =>
    dispatch({ type: "INTERCHANGE_LANGUAGES" });
  const setFromLangguages = (payload: FromLanguage) =>
    dispatch({ type: "SET_FROM_LANGUAGE", payload: payload });
  const setToLangguages = (payload: Languages) =>
    dispatch({ type: "SET_TO_LANGUAGE", payload: payload });
  const setFromText = (payload: Languages) =>
    dispatch({ type: "SET_FROM_TEXT", payload: payload });
  const setResult = (payload: Languages) =>
    dispatch({ type: "SET_RESULT", payload: payload });

  return {
    state,
    interchangeLanguages,
    setFromLangguages,
    setToLangguages,
    setFromText,
    setResult,
  };
};
