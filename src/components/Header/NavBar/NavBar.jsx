import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import ColorChange from "./ColorChange/ColorChange";
function open() {
  const color = document.querySelector(".color");
  color.style.display == "block"
    ? (color.style.display = "none")
    : (color.style.display = "block");
}
function NavBar(props) {
  return (
    <>
      <div className="navbar">
        <ul className="navbar__list">
          {items.map((item, i) => {
            return (
              <li className="navbar__item">
                <Link className="navbar__link" to={item.link}>
                  {item.text}
                </Link>
              </li>
            );
          })}
          <li className="navbar__item">
            <div className="navbar__link" onClick={open}>
              Settings
            </div>
            <ColorChange />
          </li>
        </ul>
      </div>
    </>
  );
}
const items = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "about",
    text: "About",
  },
  {
    link: "portfolio",
    text: "Portfolio",
  },
  {
    link: "contact",
    text: "Contact",
  },
];
export default NavBar;
