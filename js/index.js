import React from "react";
import ReactDOM from "react-dom";
import Cards from "./product";
import HeaderApp from "./header";

function App() {
  return (
    <section className="wrapper">
      <HeaderApp />
      <div className="container">
        <Cards name="A Sign of Four" />
        <Cards name="A Study in Scarlet" />
        <Cards name="Baskervilles Hound" />
        <Cards name="The Adventures of Sherlock Holmes" />
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
