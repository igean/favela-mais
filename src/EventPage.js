import React from "react";
import './styles/events.css';

import { CreateEvent } from './Form';

const EventPage = () => {
  return (
    <div className="page" id="events">
      <p>
        Acompanhe aqui os eventos atuais da comunidade, faça parte de uma
        sociedade mais acolhedora, empregadora e justa.
      </p>

      {/* PROXIMOS EVENTOS */}
      <h3>Próximos eventos</h3>
      <div className="events-cards">
        <div className="card">
          <div className="img-container">
            <img src="https://images.unsplash.com/photo-1570715431238-e70313e87b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
          </div>
          <div className="card-info">
            <strong className="card-title">União 1.0</strong>
            <span>12/12/2020</span>
          </div>
          <div className="card-body">
            <p>
              <i className="fas fa-user" />
              Antonio Nunes
            </p>
            <p>
              Esse evento visa unir as comunidades para a arrecadação de roupas
              para doação
            </p>
            <p>CONFIRMADO: 85 pessoas</p>

            <div className="go-event">
              <button className="dont-go">Não vou</button>
              <button className="go">Eu vou</button>
            </div>
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
            <p>
              <i className="fas fa-user" />
              Antonio Nunes
            </p>
            <p>
              Esse evento visa unir as comunidades para a arrecadação de roupas
              para doação
            </p>
            <p>CONFIRMADO: 85 pessoas</p>

            <div className="go-event">
              <button className="dont-go">Não vou</button>
              <button className="go">Eu vou</button>
            </div>
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
            <p>
              <i className="fas fa-user" />
              Antonio Nunes
            </p>
            <p>
              Esse evento visa unir as comunidades para a arrecadação de roupas
              para doação
            </p>
            <p>CONFIRMADO: 85 pessoas</p>

            <div className="go-event">
              <button className="dont-go">Não vou</button>
              <button className="go">Eu vou</button>
            </div>
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
            <p>
              <i className="fas fa-user" />
              Antonio Nunes
            </p>
            <p>
              Esse evento visa unir as comunidades para a arrecadação de roupas
              para doação
            </p>
            <p>CONFIRMADO: 85 pessoas</p>

            <div className="go-event">
              <button className="dont-go">Não vou</button>
              <button className="go">Eu vou</button>
            </div>
          </div>
        </div>
      </div>

      {/* EVENTOS CANCELADOS */}
      <h3>Eventos cancelados</h3>
      <div className="events-cards">
        <div className="card">
          <div className="img-container">
            <img src="https://images.unsplash.com/photo-1570715431238-e70313e87b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
          </div>
          <div className="card-info">
            <strong className="card-title">União 1.0</strong>
            <span>12/12/2020</span>
          </div>
          <div className="card-body">
            <p>
              <i className="fas fa-user" />
              Antonio Nunes
            </p>
            <p>
              Esse evento visa unir as comunidades para a arrecadação de roupas
              para doação
            </p>
            <p>CONFIRMADO: 85 pessoas</p>

            <div className="canceled">
            <button>Cancelado</button>
            </div>
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
            <p>
              <i className="fas fa-user" />
              Antonio Nunes
            </p>
            <p>
              Esse evento visa unir as comunidades para a arrecadação de roupas
              para doação
            </p>
            <p>CONFIRMADO: 85 pessoas</p>

            <div className="canceled">
            <button>Cancelado</button>
            </div>
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
            <p>
              <i className="fas fa-user" />
              Antonio Nunes
            </p>
            <p>
              Esse evento visa unir as comunidades para a arrecadação de roupas
              para doação
            </p>
            <p>CONFIRMADO: 85 pessoas</p>

            <div className="canceled">
            <button>Cancelado</button>
            </div>
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
            <p>
              <i className="fas fa-user" />
              Antonio Nunes
            </p>
            <p>
              Esse evento visa unir as comunidades para a arrecadação de roupas
              para doação
            </p>
            <p>CONFIRMADO: 85 pessoas</p>

            <div className="canceled">
            <button>Cancelado</button>
            </div>
          </div>
        </div>
      </div>

      <CreateEvent />
    </div>
  );
};

export default EventPage;