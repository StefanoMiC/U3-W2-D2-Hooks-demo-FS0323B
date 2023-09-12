// 2 regole fondamentali degli HOOKS
// 1) gli Hooks possono venire utilizzati SOLO all'interno dei componenti a funzione
// 2) Bisogna utilizzare i React Hooks SEMPRE in modo esplicito all'interno del componente a funzinoe, prima del return, fuori da qualsiasi
// condizione, altra funzione, cicli ecc...
import { useState, useEffect } from "react";

const EffectExample = () => {
  // immaginiamo uno state con un oggetto
  // state = {
  //   name: "stefano",
  //   counter: 0,
  // }

  const [counter, setCounter] = useState(0); // 0 è il valore di default di counter
  const [name, setName] = useState("stefano"); // "stefano" è la stringa di default di name

  // useState ritorna un array con valore dello stato iniziale (undefined se non presente),
  // e la funzione "setter" che permette di aggiornare il valore dello stato
  // tipicamente si destruttura l'array per avere già due variabili utilizzabili, estratte dall'array ritornato da useState

  // useEffect a seconda di come lo si utilizzi, imita il comportamento di componentDidMount, componentDidUpdate e componentWillUnmount

  // fa le veci di un componentDidMount()
  useEffect(() => {
    console.log("useEffect come componentDidMount()");
  }, []);
  // useEffect si aspetta un parametro che è una callback, e opzionalmente un secondo che è un'array (dependency list)
  // se dependency list è vuota avvierà la callback una volta sola al montaggio del componente

  //   useEffect(() => {
  //     console.log("useEffect come componentDidUpdate() (senza freni)");
  //   });

  // questi due sono come fossero un didMount + didUpdate insieme
  // avvengono una volta al caricamento del componente e un'altra volta quando il valore della loro dipendenza (nella dependency list) cambia.
  useEffect(() => {
    console.log("useEffect come componentDidUpdate() (dependency: counter)");
  }, [counter]);

  useEffect(() => {
    console.log("useEffect come componentDidUpdate() (dependency: name)");
  }, [name]);

  // il return all'interno della callback dello useEffect sarà una funzione chiamata poco prima della "morte" del componente
  // fa quindi le veci di un componentWillUnmount, utile per chidere sessioni di connessioni attive (es. sockets, chat ecc) oppure resettare un intervallo
  useEffect(() => {
    console.log("last effect");
    return () => console.log("me ne sto andando");
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName(name === "stefano" ? "Massimiliano" : "stefano")}>change name</button>
      <h2>Il contatore segna: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};
export default EffectExample;
