import { AUTO_LANGUAGE, SUPORTED_LANGUAGES } from "./constants";

export type Languages = keyof typeof SUPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Languages | AutoLanguage; //el que traduce no tiene para cambiar lenuajes asique sera auto o lo otros lenuajes

export interface StateInitial {
  fromLanguage: FromLanguage;
  toLanguage: Languages;
  fromText: string;
  result: string;
  loading: boolean;
}

export type Action =
  | { type: "INTERCHANGE_LANGUAGES" }
  | { type: "SET_FROM_LANGUAGE"; payload: FromLanguage }
  | { type: "SET_TO_LANGUAGE"; payload: Languages }
  | { type: "SET_FROM_TEXT"; payload: string }
  | { type: "SET_RESULT"; payload: string };

export enum SectionType {
  From = "from",
  To = "To",
}
