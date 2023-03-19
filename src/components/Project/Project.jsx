import React from "react";
import "./Project.css";

function Project(props) {
  console.log(props.technologies);
  return (
    <>
      <div className="project">
        <div className="project__img-container">
          <img src={props.photo} alt="" className="project__img" />
        </div>
        <h2 className="modal__title modal__title_project">
          <span className="changed">{props.title}</span>
        </h2>
        <div className="project__inner">
          <h3 className="modal__title modal__title_small">Technologies</h3>
          <ul className="list">
            {props.technologies.map((item, i) => {
              return (
                <li
                  className={
                    i == 0 ? "list__item list__item_first" : "list__item"
                  }
                >
                  <p className="list__text">{item}</p>
                </li>
              );
            })}
          </ul>
          <p className="modal__text modal__text_large ">{props.description}</p>
          <div className="project__find">
            <a className="modal__text" href={props.code}>
              <span className="changed">Code</span>
            </a>
            <a className="modal__text" href={props.deployment}>
              <span className="changed">Deployment</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
