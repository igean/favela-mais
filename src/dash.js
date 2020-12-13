import React from "react";
import "./styles/dash.css";

class Dash extends React.Component {
  render() {
    return (
      <div>
        <header className="dash">
          <h2>
            <span className="text-o">Olá</span> <br /> Renan Santana
          </h2>
          <div className="circle">
            <i className="fas fa-question" />
          </div>
        </header>
        <main className="dash">
          <div className="page" id="home">
            <p>
              Nosso intuito é unir você <span className="text-o">CAMPEÃO</span>{" "}
              que busca sucesso financeiro, ou até aprender uma nova arte,
              tecnologia, empreendimento.
            </p>

            <p>
              Somos uma plataforma filantrópica que tem como objetivo{" "}
              <span className="bold">IMPACTAR</span> e dar visibilidade a toda
              comunidade, e tornar em um espaço para todos.
            </p>
          </div>

          <div className="page" id="events">
            <p>
              Acompanhe aqui os eventos atuais da comunidade, faça parte de uma sociedade mais acolhedora, empregadora e justa.
            </p>

            <div className="items">
                <div className="card">
                    <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1570715431238-e70313e87b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
                    </div>
                    <div className="card-info">
                     <strong className="card-title">União 1.0</strong>
                     <span>12/12/2020</span>
                     </div>
                     <div className="card-body">
                         <p><i />Antonio Nunes</p>
                         <p>Esse evento visa unir as comunidades para a arrecadação de roupas para doação</p>
                         <p>CONFIRMADO: 85 pessoas</p>
                     </div>
                </div>

                <div className="card">
                    <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1570715431238-e70313e87b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
                    </div>
                    <div className="card-info">
                     <strong className="card-title">União 1.0</strong>
                     <span>12/12/2020</span>
                     </div>
                     <div className="card-body">
                         <p><i />Antonio Nunes</p>
                         <p>Esse evento visa unir as comunidades para a arrecadação de roupas para doação</p>
                         <p>CONFIRMADO: 85 pessoas</p>
                     </div>
                </div>

                <div className="card">
                    <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1570715431238-e70313e87b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
                    </div>
                    <div className="card-info">
                     <strong className="card-title">União 1.0</strong>
                     <span>12/12/2020</span>
                     </div>
                     <div className="card-body">
                         <p><i />Antonio Nunes</p>
                         <p>Esse evento visa unir as comunidades para a arrecadação de roupas para doação</p>
                         <p>CONFIRMADO: 85 pessoas</p>
                     </div>
                </div>

                <div className="card">
                    <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1570715431238-e70313e87b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
                    </div>
                    <div className="card-info">
                     <strong className="card-title">União 1.0</strong>
                     <span>12/12/2020</span>
                     </div>
                     <div className="card-body">
                         <p><i />Antonio Nunes</p>
                         <p>Esse evento visa unir as comunidades para a arrecadação de roupas para doação</p>
                         <p>CONFIRMADO: 85 pessoas</p>
                     </div>
                </div>

                <div className="card">
                    <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1570715431238-e70313e87b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
                    </div>
                    <div className="card-info">
                     <strong className="card-title">União 1.0</strong>
                     <span>12/12/2020</span>
                     </div>
                     <div className="card-body">
                         <p><i />Antonio Nunes</p>
                         <p>Esse evento visa unir as comunidades para a arrecadação de roupas para doação</p>
                         <p>CONFIRMADO: 85 pessoas</p>
                     </div>
                </div>
            </div>
          </div>

          <div className="menu">
              <strong>Navegue pelas opções abaixo</strong>
              <div className="items">
                <div className="item">
                  <i className="fas fa-home fa-3x" />
                </div>
                <div className="item">
                  <i className="fas fa-users fa-3x" />
                </div>
                <div className="item">
                  <i className="fas fa-book-reader fa-3x" />
                </div>
                <div className="item">
                  <i className="fas fa-user-circle fa-3x" />
                </div>
              </div>
            </div>
        </main>
      </div>
    );
  }
}

export default Dash;
