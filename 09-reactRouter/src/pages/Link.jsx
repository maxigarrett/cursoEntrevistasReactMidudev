import { EVENT } from "../const";

const navigate = (href) => {
  window.history.pushState({}, "", href);
  //crear evento personalizado para avisar que cambiamos el url
  const navigationEvent = new Event(EVENT.PUSHSTATE);
  //despachamos el evento y el que quiera escucharlo que lo escuche
  window.dispatchEvent(navigationEvent);
};

export const Link = ({ target, to, ...props }) => {
  const handleClick = (e) => {
    console.log(e);
    //sin preventDfault hace el comportamiendo por defecto de un '<a>' y funcionnan todos lo shorcut
    //el button left es por defecto 0. los demas botones tienen otros numeros pero el onclick ya lo evalua por defecto
    const isMainEvent = e.button === 0;
    const isModifierEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
    const isManageableEvent = target === undefined || target === "_self"; //son por defectos

    if (isMainEvent && isManageableEvent && !isModifierEvent) {
      //click normal para navegar
      e.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
};
