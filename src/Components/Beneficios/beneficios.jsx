import React from "react";
import "../../Assets/css/beneficios.css";

function Beneficios() {
  return (
    <section className="beneficios container">
      <ul className="beneficios__list">
        <li className="beneficios__painel-item beneficios__painel-item--tempo">
          <h3 className="beneficios__painel-titulo">
            
            Tempo
          </h3>
          <p className="beneficios__painel-desc">
            Tempo é importante! Trabalhamos em ritmo acelerado, atendendo
            rigorosamente aos prazos.
          </p>
        </li>

        <li className="beneficios__painel-item beneficios__painel-item--dinheiro">
          <h3 className="beneficios__painel-titulo">
            
            Foco
          </h3>
          <p className="beneficios__painel-desc">
            Focamos no empreendimento! Oferecemos serviços de qualidade com
            preços acessíveis.
          </p>
        </li>

        <li className="beneficios__painel-item beneficios__painel-item--quimica" >
          <h3 className="beneficios__painel-titulo">
            
            Especialistas
          </h3>
          <p className="beneficios__painel-desc">
            Focamos no empreendimento! Oferecemos serviços de qualidade com
            preços acessíveis.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Beneficios;
