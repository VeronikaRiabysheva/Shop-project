import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
export default function Order(props) {
  return (
    <div className="item">
      <img src={"./img/" + props.item.img} alt="loading.." />
      <h2 className="main-title">
        <b>{props.item.title}</b>
      </h2>
      <p className="main-price">
        <b>${props.item.price}</b>
      </p>
      <BsFillTrash3Fill
        className="delete-icon"
        onClick={() => props.onDelete(props.item.id)}
      />
    </div>
  );
}
