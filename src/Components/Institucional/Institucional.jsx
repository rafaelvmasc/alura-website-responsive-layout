import React from "react";
import "../../Assets/css/institucional.css";
import videoInsti from "../../Assets/img/formacao-java.mp4";

function Institucional() {
  return (
    <section className="institucional container">
      <h2 className="institucional__title titulo">Institucional</h2>
      <div className="Rogue">
        <div>
          <p className="institucional__texto">Um pouco mais sobre a Apeperia</p>
          <address className="institucional__address">
            Rua Vergueiro, 3185
            <br />
            Vila Mariana, São Paulo
            <article className="institucional__contato">
              <p>
                <a
                  href="tel:+551155712751"
                  className="institucional__contato-telefone"
                >
                  (11) 5571-2751
                </a>{" "}
                ou{" "}
                <a
                  href="mailto:contato@apeperia.com"
                  className="institucional__contato-email"
                >
                  contato@apeperia.com
                </a>
              </p>
            </article>
          </address>
        </div>
      <video src={videoInsti} className="institucional__video" controls></video>
      </div>
    </section>
  );
}

export default Institucional;
