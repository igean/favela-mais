import React from "react";
import "./styles/main.css";
import Login from "./Form";
import logo from "./images/icon.jpg";

function App() {
  {
    return (
      <div className="parent">
        <header>
          <h1>Bem vindo ao favela+</h1>
          <img src={logo}></img>
        </header>
        <main className="main">
          <p>
            Nosso intuito é garantir união entre todos e todas, colaborar com o
            desenvolvimento da comunidade!
          </p>
        </main>
        <Login />
        <div className="pic">
        </div>
      </div>
    );
  }
}

export default App;
