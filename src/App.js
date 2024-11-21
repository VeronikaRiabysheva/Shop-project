import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Category from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import About from "./components/About";
import Contacts from "./components/Contacts";
import { items } from "D:/vscode_projects/shop/src/data.js";
import { useState } from "react";
import "./index.css";
import ".//components/about.css";
import ".//components/Contacts.css";
import ".//components/Categories.css";
import ".//components/Items.css";
import ".//components/ShowFullItem.css";
import ".//components/Footer.css";

export default function App() {
  const [cart, setCart] = useState([]);
  let [currentItems, setCurrentItems] = useState(items);
  let [showFullItem, setShowFullItem] = useState(false);
  let [fullItem, setFullItem] = useState({});
  const [notification, setNotification] = useState("");
  const [deleteNotification, DeleteSetNotification] = useState("");

  const AddToOrder = (item) => {
    let isInArray = false;
    cart.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) setCart((prevCart) => [...prevCart, item]);
    setNotification(`${item.title} добавлен в корзину!`);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const deleteOrder = (id, item) => {
    setCart((prevCart) => [...prevCart.filter((el) => el.id !== id)]);
    DeleteSetNotification(`Товар удален из корзины!`);

    setTimeout(() => {
      DeleteSetNotification("");
    }, 3000);
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter((el) => el.category === category));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  const closeFullItem = () => {
    setShowFullItem(false);
  };

  return (
    <div className="wrapper">
      <Header cart={cart} setCart={setCart} onDelete={deleteOrder} />
      <Category chooseCategory={chooseCategory} />
      <main>
        {currentItems.map((item) => (
          <Items
            key={item.id}
            {...item}
            onAdd={AddToOrder}
            onShowItem={onShowItem}
          />
        ))}
        {/* <Items {...items[0]} />
        <Items {...items[1]} />
        <Items {...items[2]} />
        <Items {...items[3]} />
        <Items {...items[4]} />
        <Items {...items[5]} /> */}
      </main>
      {showFullItem && (
        <ShowFullItem
          item={fullItem}
          onAdd={AddToOrder}
          onClose={closeFullItem}
        />
      )}
      {notification && <div className="notification">{notification}</div>}
      {deleteNotification && (
        <div className="notification-del">{deleteNotification}</div>
      )}
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}
