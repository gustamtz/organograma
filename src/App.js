import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "📅 Cronograma",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "🔎 Pesquisas",
      corPrimaria: "#6278f7",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "🎨 Power Point",
      corPrimaria: "orange",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [integrantes, setIntegrantes] = useState([]);

  const aoNovoIntegranteAdd = (integrante) => {
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
          integrantes={integrantes.filter(
            (integrante) => integrante.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
