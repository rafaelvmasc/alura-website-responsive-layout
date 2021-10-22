import React from "react";
import logoApeperia from "../../Assets/img/logo-apeperia.svg";

function HeaderNav() {
  return (
    <header className="cabecalho container">
      <img
        className="cabecalho__logo"
        src={logoApeperia}
        alt="Logo da Apeperia"
      />
      <nav className="cabecalho__navegacao">
        <ul>
          <li className="cabecalho__link">
            <a href="#">Sobre</a>
          </li>
          <li className="cabecalho__link">
            <a href="#">Planos</a>
          </li>
          <li className="cabecalho__link">
            <a href="#">Blog</a>
          </li>
          <li className="cabecalho__link">
            <a href="#">Destaques</a>
          </li>
          <li className="cabecalho__link">
            <a href="#">Institucional</a>
          </li>
          <li className="cabecalho__link">
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;
