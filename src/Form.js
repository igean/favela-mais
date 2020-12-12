import React from 'react';
import './styles/form.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    render() {
        return (
            <form>
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
                <a href="/esqueci-minha-senha">Esqueci minha senha</a>
                <button type="submit">Entrar</button>
            </form>
        )
    }
}

export default Login