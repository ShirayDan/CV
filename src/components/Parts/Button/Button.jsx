import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <div className="home__btn-container">
        <a href={props.link} className="home__link" download={props.download}>
          {props.text}
        </a>
      </div>
    </>
  );
}
export default Button;
