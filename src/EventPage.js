import React from "react";
import "./styles/events.css";

import NextEvents from "./NextEvents";
import CanceledEvents from "./CanceledEvents";
import PassedEvents from "./PassedEvents";

const EventPage = () => {
  return (
    <div className="page" id="events">
      <header className="dash">
        <h2>
          <span className="text-o">Eventos</span>
        </h2>
        <div className="circle">
          <i className="fas fa-question" />
        </div>
      </header>
      <main>
        <p>
          Os eventos são focados em resolver problemas das periferias, totalmente inclusivos, podendo qualquer pessoa com deficiência participar. Acompanhe:
        </p>

        <NextEvents />
        <CanceledEvents />
        <PassedEvents />
      </main>
    </div>
  );
};

export default EventPage;
