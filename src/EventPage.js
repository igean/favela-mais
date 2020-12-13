import React from "react";
import './styles/events.css';

import NextEvents from './NextEvents';
import CanceledEvents from './CanceledEvents';
import PassedEvents from './PassedEvents';

const EventPage = () => {
  return (
    <div className="page" id="events">
      <p>
        Acompanhe aqui os eventos atuais da comunidade, faça parte de uma
        sociedade mais acolhedora, empregadora e justa.
      </p>

      <NextEvents />
      <CanceledEvents />
      <PassedEvents />

    </div>
  );
};

export default EventPage;