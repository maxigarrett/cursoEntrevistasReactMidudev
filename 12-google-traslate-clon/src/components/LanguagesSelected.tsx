import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPORTED_LANGUAGES } from "../constants";
import { FromLanguage, Languages, SectionType } from "../types.d";
// import { FC } from "react";

//creamos unas props donde vamos a necesitar que en App.tsx cuando llamemos a este componente por props
//necesitara que le pasamos si es de type:'from' o 'to' asi diferenciar que tipo necesita por parametro esta funcion onCgange
type Props =
  | {
      type: SectionType.From;
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: SectionType.To;
      value: Languages;
      onChange: (language: Languages) => void;
    };

export const LanguagesSelected = ({ onChange, value, type }: Props) => {
  console.log(value);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);
    onChange(e.target.value as Languages); //forzamos el tipado para que no de error
  };

  //el value le forzamos a tener como el valor de una variable de estado cuando va cambiando(le pasamos ese estado como propos)
  //entonces cuando cambie el valor tambien cambiara el nombre dentro del <option> y como sabe que poner ya que el value solo almacena 'es,en,de'
  //es por la key del option que almacena el 'es,en,de' y muestra 'ingles,español,aleman'
  return (
    <Form.Select
      onChange={handleChange}
      aria-label="slecciona el idioma"
      value={value}
    >
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>auto</option>}
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
