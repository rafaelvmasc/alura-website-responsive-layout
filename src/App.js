import React from "react";

import "./Assets/css/base.css";
import "./Assets/css/cabecalho.css";
import "./Assets/css/chamada.css";
import "./Assets/css/destaques.css";

import HeaderNav from "./Components/Header/header";
import Chamada from "./Components/Chamada/chamada";
import Destaques from "./Components/Destaques/destaques";
import Beneficios from "./Components/Beneficios/beneficios";
import Planos from "./Components/Planos/Planos";
import Sobre from "./Components/Sobre/Sobre";
import Contato from "./Components/Contato/Contato";
import Institucional from "./Components/Institucional/Institucional";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <HeaderNav />
      <main>
        <Chamada />
        <Destaques />
        <Beneficios />
        <Sobre />
        <Planos />
        <Contato /> 
        <Institucional />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
