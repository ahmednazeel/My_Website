import React, { useContext } from "react";
import "./sideInfoHome.css";
import icon_1 from "../../images/icons/icons8-github-94.png";
import icon_2 from "../../images/icons/icons8-linked-in-50.png";
import icon_3 from "../../images/icons/icons8-location.gif";
import LanguageContext from "../../Context/LanguageContext";
const SideInfoHome = () => {
  const translate = useContext(LanguageContext);
  return (
    <div className="side-info box-shadow">
      <h3 className="font_title fs_2 c-titleSection py-3">
        {translate.mainPage.aboutSection.title}
      </h3>
      <p className="desc-info bor-bottom">
        {translate.mainPage.aboutSection.aboutDesc}
      </p>
      <ul className="side-contact-links">
        <li className="list-item_one d-flex align-items-center gap-3">
          <img src={icon_3} alt="location ahmed nazeel" />
          <span className="fs_1-5 c-first">
            {translate.mainPage.aboutSection.country}
          </span>
        </li>
        <li className="list-item_one">
          <a
            target="_blank"
            href="https://github.com/ahmednazeel"
            target="_blank"
            className="d-flex align-items-center gap-3"
          >
            <img src={icon_1} alt="github ahmed nazeel" />
            <span className="fs_1-5 c-first">github</span>
          </a>
        </li>
        <li className="list-item_one">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ahmed-nazeel-173254248"
            className="d-flex align-items-center gap-3"
          >
            <img
              className="bg-light"
              src={icon_2}
              alt="linkedin ahmed nazeel"
            />
            <span className="fs_1-5 c-first">linkedin</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideInfoHome;
