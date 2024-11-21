import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import Order from "./Order";

export default function Header(props) {
  let [openCart, setCartOpen] = useState(false);

  const showOrders = (props) => {
    let summa = 0;
    props.cart.forEach((el) => {
      summa += Number.parseFloat(el.price);
      console.log(el.price);
    });

    return (
      <div>
        {props.cart.map((el) => (
          <Order onDelete={props.onDelete} key={el.title} item={el} />
        ))}
        <p className="summa">
          Итого:{" "}
          <span className="summa-number">
            ${new Intl.NumberFormat().format(summa)}
          </span>
        </p>
      </div>
    );
  };
  const showNothing = (props) => {
    return <h2 className="empty">Товаров нет</h2>;
  };
  return (
    <header>
      <div>
        <span className="logo">House staff</span>
        <ul className="nav">
          <li>
            <BsCart4
              onClick={() => setCartOpen((prev) => !prev)}
              className={`shop-cart-button ${openCart ? "active" : ""}`}
            />
          </li>
          <li>
            <a href="#about-link">Про нас</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
          <li>
            <a href="#items">Товары</a>
          </li>
        </ul>
        {openCart && (
          <div className="shop-cart">
            {props.cart.length > 0 ? showOrders(props) : showNothing()}
            {/* {props.cart.map((el) => (
              <Order key={el.title} item={el} />
            ))} */}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
