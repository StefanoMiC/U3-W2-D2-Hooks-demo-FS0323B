// 2 regole fondamentali degli HOOKS
// 1) gli Hooks possono venire utilizzati SOLO all'interno dei componenti a funzione
// 2) Bisogna utilizzare i React Hooks SEMPRE in modo esplicito all'interno del componente a funzinoe, prima del return, fuori da qualsiasi
// condizione, altra funzione, cicli ecc...
import { useState } from "react";

const StateExample = () => {
  // immaginiamo uno state con un oggetto
  // state = {
  //   counter: 0,
  //   name: "stefano",
  //   comments: []
  // }

  //   const stefano = useState("stefano");
  //   console.log(stefano);
  //   console.log(stefano[0]);
  //   console.log(stefano[1]);

  const [name, setName] = useState("stefano");
  const [comments, setComments] = useState([]);
  const [counter, setCounter] = useState(0);
  // useState ritorna un array con valore dello stato iniziale (undefined se non presente),
  // e la funzione "setter" che permette di aggiornare il valore dello stato
  // tipicamente si destruttura l'array per avere già due variabili utilizzabili, estratte dall'array ritornato da useState

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName("Massimiliano")}>change name</button>
      <button onClick={() => setComments([...comments, { commentText: "best restaurant in town" }])}>
        change comments
      </button>
      <ul>
        {comments.map((comment, i) => (
          <li key={i}>{comment.commentText}</li>
        ))}
      </ul>

      <h2>Il contatore segna: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};
export default StateExample;
