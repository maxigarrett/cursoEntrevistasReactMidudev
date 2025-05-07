import { Form } from "react-bootstrap";
import { SUPORTED_LANGUAGES } from "../constants";
import { Languages } from "../types";
// import { FC } from "react";

interface Props {
  onChange: (language: Languages) => void;
}

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
