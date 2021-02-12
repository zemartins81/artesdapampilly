import React from "react";
import Card from "./Card";
import "./card.css";

export default function Cards({ itens }) {
  return (
    <div className="container cards">
      <div className="row">
        {itens.map((item) => {
          return (
            <div className="col s12 m6 l4">
              <div key={item.id}>
                <Card item={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
