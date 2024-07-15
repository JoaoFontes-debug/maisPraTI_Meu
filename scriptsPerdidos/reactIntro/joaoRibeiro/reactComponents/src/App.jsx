import React from "react";
import Component from "./components/Component.jsx";
import ComponentDois from "./components/ComponentDois.jsx";
import ComponentTres from "./components/ComponentTres.jsx";
import ComponentQuatro from "./components/ComponentQuatro.jsx";

function App() {
  return (
    <div>
      <h1>LABOOON!!!</h1>
      <ComponentQuatro titulo="componente quatro">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </ComponentQuatro>
      <ComponentTres titulo='testando props' />
      <hr />
      <ComponentDois />
      <hr />
      <Component />
    </div>
  );
}

export default App;
