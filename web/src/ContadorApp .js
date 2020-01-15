import React, { useState } from "react";

/**Os 3 Conceitos do React
 * Componente: e uma função (Bloco isolado) que retorna algum conteudo pode ser HTML, CSS ou JavaScript, e cada componente tem que ser criado dentro do proprio arquivo
 * Propriedade:Informações que um Componente pai passa para os seus filhos utilizando props
 * Estado: Informações mantidas pelo conponente (Lembrar: imutabilidade)
 */

function App() {
  const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Contador : {counter}</h1>
      <button onClick={incrementCounter}>Incremento</button>
    </>
  );
}

export default App;
