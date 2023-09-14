import React, { useContext } from "react";
import imgProject from "../../../images/project/Screenshot 2023-08-06 023939.png";
import imgProject_1 from "../../../images/project/Screenshot 2023-08-06 185028.png";
import imgProject_2 from "../../../images/project/Screenshot 2023-08-06 190546.png";
import imgProject_3 from "../../../images/project/Screenshot 2023-08-08 080929.png";
import imgProject_4 from "../../../images/project/Screenshot 2023-08-21 133531 - Copy.png";
import doubleIcom from "../../../images/icons/icons8-double-tap-gesture.gif";
import gitIcom from "../../../images/icons/icons8-github.gif";
import projectGif from "../../../images/icons/project.gif";

import "./project.css";
import LanguageContext from "../../../Context/LanguageContext";

const Project = () => {
  const imgObj = [
    {
      imgProject: imgProject,
      hrefPro: "https://ahmednazeel.github.io/Ecommerce_Project/index.html",
      hrefCode: "https://github.com/ahmednazeel/Ecommerce_Project",
    },
    {
      imgProject: imgProject_1,
      hrefPro: "https://ahmednazeel.github.io/Dashboard_Project/dashboard.html",
      hrefCode: "https://github.com/ahmednazeel/Dashboard_Project",
    },
    {
      imgProject: imgProject_2,
      hrefPro: "https://ahmednazeel.github.io/AlNazeel_Blog-/ANazeel.html",
      hrefCode: "https://github.com/ahmednazeel/AlNazeel_Blog-",
    },
    {
      imgProject: imgProject_3,
      hrefPro: "https://ahmednazeel.github.io/Restaurant_project/",
      hrefCode: "https://github.com/ahmednazeel/Restaurant_project",
    },
    {
      imgProject: imgProject_4,
      hrefPro: "https://ahmednazeel.github.io/Restuarent_Project_2/",
      hrefCode: "https://github.com/ahmednazeel/Restuarent_Project_2",
    },
  ];
  const translate = useContext(LanguageContext);
  const projectTEXTS = translate.projectPage;
  return (
    <>
      <div className="d-flex align-items-center gap-4  title-contact">
        <img className="icon-gif" src={projectGif} alt="icon email" />
        <h2 className="title-comp font_title c-titleSection">{projectTEXTS.titleSEC}</h2>
      </div>
      <div className="project-content">
        {imgObj.map((pro) => (
          <div className="project-item">
            <img className="img-pro" src={pro.imgProject} alt="image project" />
            <div className="icons-wrapper d-flex gap-4">
              <a target="_blank" href={pro.hrefPro}>
                <img className="img-double" src={doubleIcom} alt="" />
              </a>
              <a target="_blank" href={pro.hrefCode}>
                <img className="img-double git_icon" src={gitIcom} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
