import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "green",
      // mudar cores secundárias!
      corSecundaria: "#eee",
    },
    {
      nome: "Pesquisas",
      corPrimaria: "#6278f7",
      corSecundaria: "#eee",
    },
    {
      nome: "Power Point",
      corPrimaria: "orange",
      corSecundaria: "#eee",
    },
  ];

  const [integrantes, setIntegrantes] = useState([]);

  const aoNovoIntegranteAdd = (integrante) => {
    console.log(integrante);
    setIntegrantes([...integrantes, integrante]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((time) => time.nome)}
        aoIntegranteCadastrado={(integrante) => aoNovoIntegranteAdd(integrante)}
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          integrantes={integrantes}
        />
      ))}
    </div>
  );
}

export default App;
