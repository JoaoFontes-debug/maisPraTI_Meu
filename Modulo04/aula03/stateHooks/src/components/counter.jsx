import { useState } from "react";

function Counter(){
    //const stateData =  useState();
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>voce cliclou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>
                Clique aqui
            </button>
        </div>
    )
}

export default Counter;