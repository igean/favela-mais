import React from "react";
import './styles/home.css';

const HomePage = () => {
  return (
    <div className="page" id="home">
      <p>
        Nosso intuito é unir você <span className="text-o">CAMPEÃO</span> que
        busca sucesso financeiro, ou até aprender uma nova arte, tecnologia,
        empreendimento.
      </p>

      <p>
        Somos uma plataforma filantrópica que tem como objetivo
        <span className="bold">IMPACTAR</span> e dar visibilidade a toda
        comunidade, e tornar em um espaço para todos.
      </p>
    </div>
  );
};

export default HomePage;