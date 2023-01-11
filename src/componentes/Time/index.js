import Integrante from "../Integrante";
import "./Time.css";

const Time = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      {props.integrantes.map((integrante) => (
        <Integrante />
      ))}
    </section>
  );
};

export default Time;
