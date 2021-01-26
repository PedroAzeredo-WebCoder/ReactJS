import React from 'react';

const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} salario={props.salario} />
            <Social gh={props.github}/>
        </div>
    );
}

const Sobre = (props) =>{
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
            <h3>Salario: {props.salario}</h3>
        </div>
    );
}
const Social = (props) =>{
    return(
        <div>
           <a href={props.gh}>GitHub</a>
           <a>Linkedin</a>
           <a>Email</a>
        </div>
    );
}

function App(){
    return (
        <div>
           <h1>Conheça nossa equipe: </h1>
           <Equipe nome="Pedro" cargo="Desenvolvedor" idade="21" salario="R$100.000,00" github="https://github.com/"/>
           <Equipe nome="Francesca" cargo="Diretora Geral" idade="22" salario="R$10.000,00"/>
           <Equipe nome="Melissa" cargo="Tech Recuiter" idade="28" salario="R$5.000,00"/>
        </div>
    );
}

export default App;