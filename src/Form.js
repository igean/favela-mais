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
                    <i className="fas fa-lock" style={{color: "rgba(0,0,0,.4)"}}></i>
                    <input type="password"></input>
                    </div>
                </label>
                <div className="subform">
                    <div>
                        <label style={{color: "black", fontSize:"1rem"}}>Lembrar minha senha</label>
                        <input type="checkbox"></input>
                    </div>
                    <a href="/esqueci-minha-senha">Esqueci minha senha</a>
                </div>
                <button>Entrar</button>
                <a className="no-account" style={{fontSize:"1.2rem"}}>Não tenho uma conta</a>
            </form>
        )
    }
}

export default Login;