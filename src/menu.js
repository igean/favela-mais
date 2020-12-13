import React from "react";

const Menu = () => {
  return (
    <div className="menu" id="bottom-menu">
      <strong>Navegue pelas opções abaixo</strong>
      <div className="items">
        <button className="item selected" id="btn-home" onClick={this.goHome}>
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
  );
};

export default Menu;
