import { Form } from "react-bootstrap";
import { SUPORTED_LANGUAGES } from "../constants";
import { FromLanguage, Languages } from "../types";
// import { FC } from "react";

//creamos unas props donde vamos a necesitar que en App.tsx cuando llamemos a este componente por props
//necesitara que le pasamos si es de type:'from' o 'to' asi diferenciar que tipo necesita por parametro esta funcion onCgange
type Props =
  | {
      type: "from";
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | { type: "to"; value: Languages; onChange: (language: Languages) => void };

export const LanguagesSelected = ({ onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);
    onChange(e.target.value as Languages); //forzamos el tipado para que no de error
  };

  return (
    <Form.Select onChange={handleChange} aria-label="slecciona el idioma">
      {Object.entries(SUPORTED_LANGUAGES).map((el) => {
        const laguageName = el[1];
        const laguageTag = el[0];
        return (
          <>
            <option key={laguageTag} value={laguageTag}>
              {laguageName}
            </option>
          </>
        );
      })}
    </Form.Select>
  );
};
