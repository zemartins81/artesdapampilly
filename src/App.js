import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import Cards from "./components/Card/Cards";
import itens from "./itens.json";

function App() {
  const listItens = [...itens.itens];
  return (
    <div>
      <Navbar />
      <Cards itens={listItens} />
    </div>
  );
}

export default App;
