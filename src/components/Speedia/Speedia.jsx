import React from "react";
import Project from "../Project/Project";
import SpeediaPhoto from "../../i/speedia-prev.jpg";
function Speedia(props) {
  return (
    <>
      <Project
        title={"Speedia"}
        photo={SpeediaPhoto}
        technologies={[
          "HTML5",
          "CSS3",
          "React 18",
          "JavaScript ES6+",
          "SPA",
          "Slider Swiper",
        ]}
        description={
          "Speedia is a creative and responsive single page application for modern AutoParts & Accessories website. This app has several pages: home, about, contact, shop grid and blog page "
        }
        code={"https://github.com/ShirayDan/Auto-parts-store"}
        deployment={"https://shiraydan.github.io/Auto-parts-store/"}
      />
    </>
  );
}
export default Speedia;
