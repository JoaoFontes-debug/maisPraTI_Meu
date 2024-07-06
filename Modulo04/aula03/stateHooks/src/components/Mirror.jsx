import { useState } from "react";

function MirrorText() {
  const [text, setText] = useState('');

  return (
    //entre chaves ficam os processos que sao alterados dinamicamente. por exemplo, variaveis e funçoes.
    <div>
      <input type="text" value= {text}    
        onChange={(e) => setText(e.target.value)}/>
        <p>{text}</p>

    </div>
  )
}

export default MirrorText;