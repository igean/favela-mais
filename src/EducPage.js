import React from "react";
import "./styles/educ.css";

const EducPage = () => {
  return (
    <div className="page" id="educ">
      <header className="dash">
        <h2>
          <span className="text-o">Cursos</span>
        </h2>
        <div className="circle">
          <i className="fas fa-question" />
        </div>
      </header>
      <main>
        <p>
          É hora de aprender, e para isso nada melhor que estudar aquele
          conteúdo feito com carinho pelos nossos profissionais. Quem sai{" "}
          <span className="text-o">VENCEDOR</span> é você!
        </p>

        <div className="courses">
          <strong>Veja o que preparamos para você</strong>

          <div className="free courses-container">
            <span>Os cursos abaixo são gratuitos</span>

            <div className="courses-options">
              <div className="course">
                <strong>EMPREENDENDO COM A COMUNIDADE</strong>
                <p>
                  O empreendedorismo é a melhor arma contra o desemprego. Com
                  ele podemos criar, inovar, alterar toda nossa vida.
                </p>
                <div className="enter-course">
                  <i class="fas fa-unlock fa-2x" />
                  <button>Estou interessado</button>
                </div>
              </div>

              <div className="course">
                <strong>EMPREENDENDO COM A COMUNIDADE</strong>
                <p>
                  O empreendedorismo é a melhor arma contra o desemprego. Com
                  ele podemos criar, inovar, alterar toda nossa vida.
                </p>
                <div className="enter-course">
                  <i class="fas fa-unlock fa-2x" />
                  <button>Estou interessado</button>
                </div>
              </div>
            </div>
          </div>

          <div className="payed courses-container">
            <span>Os cursos abaixo são pagos</span>
            <div className="courses-options">
              <div className="course">
                <strong>EMPREENDENDO COM A COMUNIDADE</strong>
                <p>
                  O empreendedorismo é a melhor arma contra o desemprego. Com
                  ele podemos criar, inovar, alterar toda nossa vida.
                </p>
                <div className="payment">
                  <strong>Aceitamos</strong>
                  <div className="cards">
                    <i className="fab fa-cc-paypal fa-2x" />
                    <i className="fab fa-cc-visa fa-2x" />
                    <i className="fab fa-cc-mastercard fa-2x" />
                  </div>
                </div>
                <div className="enter-course">
                  <i class="fas fa-lock fa-2x" />
                  <button>Estou interessado</button>
                </div>
              </div>
              <div className="course">
                <strong>EMPREENDENDO COM A COMUNIDADE</strong>
                <p>
                  O empreendedorismo é a melhor arma contra o desemprego. Com
                  ele podemos criar, inovar, alterar toda nossa vida.
                </p>

                <div className="payment">
                  <strong>Aceitamos</strong>
                  <div className="cards">
                    <i className="fab fa-cc-paypal fa-2x" />
                    <i className="fab fa-cc-visa fa-2x" />
                    <i className="fab fa-cc-mastercard fa-2x" />
                  </div>
                </div>

                <div className="enter-course">
                  <i class="fas fa-lock fa-2x" />
                  <button>Estou interessado</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EducPage;
