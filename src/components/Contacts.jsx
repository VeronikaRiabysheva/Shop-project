import React from "react";

export default function Contacts() {
  return (
    <div className="contacts-all">
      <article id="contacts"></article>
      <p className="contacts-title">Контакты </p>

      <br />
      <div className="contacts">
        <div className="contacts-box">
          <h4>Телефон:</h4>
          <p> +1 (123) 456-7890</p>
        </div>
        <div className="contacts-box">
          <h4>Электронная почта:</h4>
          <p>info@housestaff.com</p>{" "}
        </div>
        <div className="contacts-box">
          <h4>Часы работы:</h4>
          <p>Пн-Пт: 10:00 - 19:00, Сб: 11:00 - 17:00, Вс: выходной</p>
        </div>
        <div className="contacts-box">
          <h4>Адрес: </h4>
          <p>ул. Пушкина, д. 1, г. Москва, Россия</p>
        </div>
        {/* <p className="contacts-qa">
          Мы рады приветствовать вас в нашем магазине и надеемся, что вы найдете
          у нас именно то, что искали!
        </p> */}
      </div>
      <br />
    </div>
  );
}
