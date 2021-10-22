import React from "react";
import "../../Assets/css/planosraffy.css";

function Planos() {
  return (
    <section className="planos container">
      <h2 className="planos__titulo titulo">Planos</h2>
      <ul className="planos__lista">
        <li className="planos__item">
          <h3 className="item__titulo start">Start</h3>
          <p className="item__preco start">R$ 500</p>
          <p className="item__texto">5 manutenções mensais</p>
          <p className="item__texto">App SEO</p>
          <p className="item__texto">1 sistema operacional</p>
          <a href="#" className="planos_botao start">
            Assinar plano
          </a>
        </li>
        <li className="planos__item">
          <h3 className="item__titulo ultra">Ultra</h3>
          <p className="item__preco ultra">R$ 1500</p>
          <p className="item__texto">20 manutenções mensais</p>
          <p className="item__texto">App SEO</p>
          <p className="item__texto">4 sistemas operacionais</p>
          <p className="item__texto">24h de atendimento</p>
          <a href="#" className="planos_botao ultra">
            Assinar plano
          </a>
        </li>
        <li className="planos__item">
          <h3 className="item__titulo mega">Mega</h3>
          <p className="item__preco mega">R$ 1000</p>
          <p className="item__texto">10 manutenções mensais</p>
          <p className="item__texto">App SEO</p>
          <p className="item__texto">2 sistemas operacionais</p>
          <a href="#" className="planos_botao mega">
            Assinar plano
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Planos;
