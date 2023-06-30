import React from "react";
import MyButton from "./Button";

function Card({ title, body }) {
  const handlerClick = () => {
    console.log("pase por aquí");
  };

  return (
    <div className="card" style={{ width: 150, border: "solid" }}>
      <img src="" ></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <MyButton nameOfButton={"Hola"} onClick={handlerClick} />
      </div>
    </div>
  );
}

export default Card;
