import React, { Component } from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} salario={this.props.salario}/>
                <hr/>
            </div>
        
        )
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
            <h2>Olá sou o(a) {this.props.nome}</h2>
            <h3>Cargo: {this.props.cargo}</h3>
            <h3>Idade: {this.props.idade}</h3>
            <h3>Salario: {this.props.salario}</h3>
        </div>
        )
    }
}

function App(){
    return (
        <div>
           <h1>Conheça nossa equipe: </h1>
           <Equipe nome="Pedro" cargo="Desenvolvedor" idade="21" salario="R$100.000,00"/>
           <Equipe nome="Francesca" cargo="Diretora Geral" idade="22" salario="R$10.000,00"/>
           <Equipe nome="Melissa" cargo="Tech Recruiter" idade="28" salario="R$5.000,00"/>
        </div>
    );
}

export default App;