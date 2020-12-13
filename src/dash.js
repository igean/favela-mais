import React from "react";

import "./styles/dash.css";
import "./styles/menu.css";

import "./scripts/dash-menu";

import HomePage from "./HomePage";
import EventPage from "./EventPage";
import EducPage from "./EducPage";

class Dash extends React.Component {
  constructor(props) {
    super(props);
  }

  goHome() {
    const home = document.getElementById("home");
    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll("button");
    const btn_home = document.getElementById("btn-home");
    pages.forEach((el) => {
      el.style.display = "none"
    });
    buttons.forEach((el) => {
      el.classList.remove("selected");
    });
    home.style.display = "block"
    btn_home.classList.add("selected");
  }

  goEvents() {
    const events = document.getElementById("events");
    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll("button");
    const btn_events = document.getElementById("btn-events");
    pages.forEach((el) => {
      el.style.display = "none"
    });
    buttons.forEach((el) => {
      el.classList.remove("selected");
    });
    events.style.display = "block"
    btn_events.classList.add("selected");
  }

  goEduc() {
    const educ = document.getElementById("educ");
    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll("button");
    const btn_educ = document.getElementById("btn-educ");
    pages.forEach((el) => {
      el.style.display = "none"
    });
    buttons.forEach((el) => {
      el.classList.remove("selected");
    });
    educ.style.display = "block"
    btn_educ.classList.add("selected");
  }

  goUser() {
    const user = document.getElementById("user");
    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll("button");
    const btn_user = document.getElementById("btn-user");
    pages.forEach((el) => {
      el.style.display = "none"
    });
    buttons.forEach((el) => {
      el.classList.remove("selected");
    });
    user.style.display = "block"
    btn_user.classList.add("selected");
  }

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
          <HomePage />
          <EventPage />
          <EducPage />

          <div className="menu" id="bottom-menu">
            <strong>Navegue pelas opções abaixo</strong>
            <div className="items">
              <button
                className="item selected"
                id="btn-home"
                onClick={this.goHome}
              >
                <i className="fas fa-home fa-3x" />
              </button>
              <button className="item" id="btn-events" onClick={this.goEvents}>
                <i className="fas fa-users fa-3x" />
              </button>
              <button className="item" id="btn-educ" onClick={this.goEduc}>
                <i className="fas fa-book-reader fa-3x" />
              </button>
              <button className="item" id="btn-user">
                <i className="fas fa-user-circle fa-3x" />
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Dash;
