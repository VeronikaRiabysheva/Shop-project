import React from "react";

export default function ShowFullItem(props) {
  return (
    <div className="full-item">
      <img
        className="close-btn"
        src="./img/close-btn.jpg"
        alt="loading..."
        onClick={() => props.onClose()}
      />

      <div>
        <img src={"./img/" + props.item.img} alt="loading.." />
        <h2 className="main-title">
          <b>{props.item.title}</b>
        </h2>

        <p className="main-desc">{props.item.desc}</p>
        <p className="main-price">
          <b>${props.item.price}</b>
        </p>
        <p
          className="add-to-cart"
          onClick={() => {
            props.onAdd(props.item);
          }}
        >
          +
        </p>
      </div>
    </div>
  );
}
