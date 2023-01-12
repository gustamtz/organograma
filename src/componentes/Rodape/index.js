//src/componentes/Rodape/index.js

import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <img src="/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>
          Desenvolvido por
          <a href="https://github.com/gustamtz" target="_blank">
            Gustavo Medeiros.
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Rodape;
