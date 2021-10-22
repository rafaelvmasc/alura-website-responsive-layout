import React from "react";

import imgComecando from "../../Assets/img/comecando-criar-logotipo.png";
import imgDicas from "../../Assets/img/dicas-fotografia.png";

function Destaques() {
  return (
    <section className="destaques container">
      <h2 className="destaques__titulo titulo">Destaques</h2>
      <a href="#">
        <figure className="destaques__painel">
          <img
            src={imgComecando}
            alt="Foto Logotipo"
            className="destaques__painel-imagem"
          />
          <figcaption className="destaques__painel-texto">
            Conheça as primeiras etapas para a criação de um logotipo
          </figcaption>
        </figure>
      </a>
      <a href="#">
        <figure className="destaques__painel">
          <img src={imgDicas} alt="" className="destaques__painel-imagem" />
          <figcaption className="destaques__painel-texto">
            Veja dicas de como fotografar usando seu celular
          </figcaption>
        </figure>
      </a>
      <a href="#" className="destaques__botao botao">Receber destaques por email</a>
    </section>
  );
}

export default Destaques;
