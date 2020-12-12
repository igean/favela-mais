import React from 'react';
import  './styles/dash.css';

class Dash extends React.Component{

    render() {
        return (
            <div>
                <header>
                    <h2>Olá <br /> Renan Santana</h2>
                </header>
                <main className="dash">
                    <p>Nosso intuito é unir você CAMPEÃO que busca sucesso financeiro, ou até aprender uma nova arte, tecnologia, empreendimento.</p>

                    <p>Somos uma plataforma filantrópica que tem como objetivo IMPACTAR e dar visibilidade a toda comunidade, e tornar em um espaço para todos.</p>

                    <div className="menu">
                        <strong>Navegue pelas opções abaixo</strong>
                        <div className="items">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Dash;