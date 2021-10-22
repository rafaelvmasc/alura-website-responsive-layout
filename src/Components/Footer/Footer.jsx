import React from "react";
import "../../Assets/css/footer.css";

import iconApeperia from "../../Assets/img/logo-apeperia.svg";
import iconFacebook from "../../Assets/img/facebook.png";
import iconTwitter from "../../Assets/img/twitter.png";
import iconInsta from "../../Assets/img/instagram.png";

function Footer() {
  return (
    <section className="rodape container">
      <img src={iconApeperia} alt="Logo da Apeperia" className="rodage__logo" />
      <ul className="rodape__list">
        <li className="rodape__item">
          <a href="">
            <img src={iconFacebook} alt="Icone do Facebook" className="item__icon" />
          </a>
        </li>
        <li className="rodape__item">
          <a href="">
            <img src={iconTwitter} alt="Icone do Twitter" className="item__icon" />
          </a>
        </li>
        <li className="rodape__item">
          <a href="">
            <img src={iconInsta} alt="Icone do Instagram" className="item__icon" />
          </a>
        </li>
      </ul>
      <nav className="rodape__nav">
          <ul className="rodape__menu">
              <li className="rodape__menu--item"><a href="">Sobre</a></li>
              <li className="rodape__menu--item"><a href="">Planos</a></li>
              <li className="rodape__menu--item"><a href="">Blog</a></li>
              <li className="rodape__menu--item"><a href="">Destaques</a></li>
              <li className="rodape__menu--item"><a href="">Institucional</a></li>
              <li className="rodape__menu--item"><a href="">Contato</a></li>
          </ul>
      </nav>
    </section>
  );
}

export default Footer;
