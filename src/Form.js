import React from 'react';
import './styles/form.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    render() {
        return (
            <form action="/inicio">
                <label>
                    CPF:
                    <div className="input-block">
                    <i className="fas fa-user"></i>
                    <input type="text"></input>
                    </div>
                </label>
                <label>
                    Senha:
                    <div className="input-block">
                    <i className="fas fa-lock"></i>
                    <input type="password"></input>
                    </div>
                </label>
                <div className="subform">
                    <div>
                        <label>Lembrar minha senha</label>
                        <input type="checkbox"></input>
                    </div>
                    <a href="/esqueci-minha-senha">Esqueci minha senha</a>
                </div>
                <button type="submit">Entrar</button>
                <a className="no-account">Não tenho uma conta</a>
            </form>
        )
    }
}

export class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-event">
                <h3>Criar um evento</h3>
                <p>Crie um evento para reunir todos da comunidade. Siga os passos abaixo para realizar um agendamento de sucesso.</p>
                <form className="event">
                <p>Escolha a data</p>
                <div className="input-block input-date">
                    <input placeholder="DD" /><input placeholder="MM" /><input placeholder="AAAA" />
                </div>

                <p>Escolha o horário</p>
                <div className="input-block input-hour">
                    <label>
                    De:
                    <input type="time" />
                    </label><br />
                    <label>
                    Até:
                    <input type="time" />
                    </label>
                </div>

                <p>Localização</p>
                <div className="input-block">
                    <label>
                    <input />
                    Não encontrou o local?
                    </label>
                </div>

                <p>Acessibilidade</p>
                <div className="input-block">
                    <label>
                    <input />
                    Descreca se há acesso para pessoas portadoras de doenças físicas
                    </label>
                </div>

                <p>Descreva qual o objetivo do evento</p>
                <div className="input-block">
                    <textarea />
                </div>
            </form>
            </div>
        )
    }
}

export default Login;