import { Component } from "react";

class Mycomponent extends Component {
   constructor(props){
        super(props);

        this.state = {
            contador:0
        }
   } 

   add = () => {
    this.setState({contador: this.state.contador + 1})
   }

   render (){
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.add}>incrementar</button>
            </div>
        )
        
   }
}

export default Mycomponent;