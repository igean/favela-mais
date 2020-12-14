import React from "react";
import "./styles/main.css";
import Login from "./Form";
import logo from "./images/icon.jpg";
import visual from "./images/visual.jpg";

function App() {
  {
    return (
      <div className="parent">
        <header>
          <h1>Bem vindo</h1>
          <img src={logo}></img>
        </header>
        <main className="main">
          <p>
            Nosso intuito é garantir união entre todos e todas, colaborar com o
            desenvolvimento da comunidade!
          </p>
        </main>
        <Login />
        <div className="pics">
          <img id="img-1" src={visual} />
          <img id="img-2" src={visual} />
          <img id="img-3" src={visual} />
          <img id="img-4" src={visual} />
          <img id="img-5" src={visual} />
        </div>
      </div>
    );
  }
}

export default App;
