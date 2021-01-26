import React, { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: 'Pedro',
            contador: 0
        };

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        state.nome = 'Francesca';
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        if(this.contador == 0){
            alert('Opa chegou a zero');
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h3>Contandor</h3>
                {this.state.nome} 
                <h3>
                    <button onClick={this.diminuir} class="btn">
                            -
                    </button>
                    {this.state.contador}
                    <button onClick={this.aumentar} class="btn">
                            +
                    </button>
                </h3>
            </div>
        );
    }
}

export default App;