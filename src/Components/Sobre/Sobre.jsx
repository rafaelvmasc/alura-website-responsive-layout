import React from "react";
import "../../Assets/css/sobre.css";

import iconeBlackberry from "../../Assets/img/blackberry.png";
import iconeApple from "../../Assets/img/apple.png";
import iconeAndroid from "../../Assets/img/android.png";
import iconeWindowsPhone from "../../Assets/img/windowsphone.png";
import sobreImg from '../../Assets/img/sobre-apeperia.png';

function Sobre() {
  return (
    <section className="sobre container">
        <div className="sobre__container--texto">
      <h1 className="sobre__titulo titulo">Sobre</h1>
      <p className="sobre__texto">
        Criamos aplicativos personalizados para{" "}
        <b className="sobre__texto--destaque">
          todas as pessoas!
        </b>
      </p>
      <p className="sobre__texto">
        A manutenção de um aplicativo não pode ser um custo extra para o
        cliente, Na Apeperia você assina nosso serviço e a manutenção já está
        inclusa. Assim, você não se preocupa com manutenção, é tudo por nossa
        conta.
      </p>
      <p
        className="sobre__texto sobre__texto--destaque"
      >
        Conte com uma equipe especializada e exclusiva pra projetos incríveis em
        qualquer plataforma.
      </p>
    <ul className="sobre__plataformas">
        <li><img src={iconeAndroid} alt="" /></li>
        <li><img src={iconeBlackberry} alt="" /></li>
        <li><img src={iconeApple} alt="" /></li>
        <li><img src={iconeWindowsPhone} alt="" /></li>
    </ul>

      <p className="sobre__texto">
        Desenvolvemos aplicativos para todas as plataformas
      </p>
      </div>
      <img src={sobreImg} alt="" className="sobre__container--img" />
    </section>
  );
}

export default Sobre;
