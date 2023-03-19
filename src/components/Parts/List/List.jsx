import React from "react";
import "./List.css";
function List(props) {
  console.log(props.info);
  return (
    <ul className="list">
      {props.info.map((item, i) => {
        return (
          <li className={i == 0 ? "list__item list__item_first" : "list__item"}>
            <p className="list__text">
              {item.name} - {item.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
export default List;
