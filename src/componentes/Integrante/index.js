import "./Integrante.css";

const Integrante = (props) => {
  return (
    <div className="integrante">
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo1 }}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="rodape">
        <h2>{props.nome}</h2>
        <h4 style={{ color: props.corDeFundo1 }}>{props.cargo}</h4>
      </div>
    </div>
  );
};

export default Integrante;
