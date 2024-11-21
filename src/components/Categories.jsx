import { useState } from "react";

export default function Category(props) {
  let [categoriesState, setCategoriesState] = useState({
    categories: [
      {
        key: "all",
        name: "Всё",
      },
      {
        key: "chairs",
        name: "Стулья",
      },
      {
        key: "tables",
        name: "Столы",
      },
      {
        key: "sofas",
        name: "Диваны",
      },
      {
        key: "lamps",
        name: "Лампы",
      },
      {
        key: "closets",
        name: "Шкафы",
      },
    ],
  });

  return (
    <div className="categories" id="items">
      {categoriesState.categories.map((el) => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
