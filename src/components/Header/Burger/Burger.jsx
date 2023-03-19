import React from "react";
import "./Burger.css";
import { Link } from "react-router-dom";
function Burger() {
  return (
    <>
      <div className="burger">
        <ul className="burger__list">
          {burgerItems.map((item, i) => {
            return (
              <li className="burger__item">
                <Link className="burger__link" to={item.link}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
const burgerItems = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/about",
    text: "About",
  },
  {
    link: "/portfolio",
    text: "Portfolio",
  },
  {
    link: "/contact",
    text: "Contact",
  },
];
export default Burger;
