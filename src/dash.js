import React from 'react';
import  './styles/dash.css';

class Dash extends React.Component{

    render() {
        return (
            <div>
                <header className="dash">
                    <h2><span className="text-o">Olá</span> <br /> Renan Santana</h2>
                    <div className="circle">
                        <i className="fas fa-question" />
                    </div>
                </header>
                <main className="dash">
                    <p>Nosso intuito é unir você <span className="text-o">CAMPEÃO</span> que busca sucesso financeiro, ou até aprender uma nova arte, tecnologia, empreendimento.</p>

                    <p>Somos uma plataforma filantrópica que tem como objetivo <span className="bold">IMPACTAR</span> e dar visibilidade a toda comunidade, e tornar em um espaço para todos.</p>

                    <div className="menu">
                        <strong>Navegue pelas opções abaixo</strong>
                        <div className="items">
                        <div className="item"><i className="fas fa-home fa-3x" /></div>
                        <div className="item"><i className="fas fa-users fa-3x" /></div>
                        <div className="item"><i className="fas fa-book-reader fa-3x" /></div>
                        <div className="item"><i className="fas fa-user-circle fa-3x" /></div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Dash;