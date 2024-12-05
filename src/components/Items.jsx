import React, { useState } from "react";

export default function Items(props) {
  // const [itemCount, setItemCount] = useState(0);

  // const increaseCount = () => {
  //   setItemCount(itemCount + 1);
  // };
  return (
    <div className="item">
      <img
        src={"./img/" + props.img}
        alt="loading.."
        onClick={() => props.onShowItem(props)}
      />
      <h2 className="main-title">
        <b>{props.title}</b>
      </h2>
      <p className="main-desc">{props.desc}</p>
      <p className="main-price">
        <b>${props.price}</b>
      </p>
      {/* <p
        className="add-to-cart"
        onClick={() => {
          props.onAdd(props);
          increaseCount();
        }}
      >
        +
      </p> */}
      {/* <p className="item-count">{itemCount}</p> */}
    </div>
  );
}
