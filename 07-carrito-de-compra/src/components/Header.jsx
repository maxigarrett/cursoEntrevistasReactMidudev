import { Filters } from "./Filters";

export const Header = ({ changefilters }) => {
  return (
    <>
      <h1>React Shop </h1>
      <Filters changefilters={changefilters} />
    </>
  );
};
