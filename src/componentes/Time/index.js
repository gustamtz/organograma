import Integrante from "../Integrante";
import "./Time.css";

const Time = (props) => {
  return (
    props.integrantes.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="integrantes">
          {props.integrantes.map((integrante) => (
            <Integrante
              corDeFundo1={props.corPrimaria}
              corDeFundo2={props.corSecundaria}
              key={integrante.nome}
              nome={integrante.nome}
              cargo={integrante.cargo}
              imagem={integrante.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
