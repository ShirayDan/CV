import React from "react";
import "./ColorChange.css";
import change from "../../../../index.js";
function ColorChange(props) {
  return (
    <>
      <div className="color">
        <ul className="color__list">
          {colors.map((item, i) => {
            return (
              <li>
                <div
                  className="color__item "
                  style={{ backgroundColor: item }}
                  onClick={change}
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
const colors = [
  "#4169e1",
  "#66B95C",
  "#ff9800",
  "#ff5e94",
  "#fa5b0f",
  "#f39977",
  "#9200ee",
  "#00D4BD",
  "#5e9e9f",
  "#EB4A4C",
  "#666d41",
  "#fe0000",
];
export default ColorChange;
