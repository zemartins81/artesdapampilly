import React from "react";
import "./card.css";

export default function Card({ item }) {
  const { title, descricao, imagem } = item;

  return (
    <div className="card s12 m6 l3">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={imagem} />
      </div>
      <div className="card-content">
        <span className="activator grey-text text-darken-4  title">
          {title}
          <br />
          <i className="material-icons right ">Descrição</i>
          <br />
        </span>

        <p>
          <a href="#">pampilly90@gmail.com</a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {title}
          <i className="material-icons right">fechar</i>
        </span>
        <p>{descricao}</p>
      </div>
    </div>
  );
}
