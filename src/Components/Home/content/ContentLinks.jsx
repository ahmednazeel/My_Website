import React, { useContext } from "react";
import "./contentLinks.css";
import { Link, NavLink } from "react-router-dom";
import LanguageContext from "../../../Context/LanguageContext";
const ContentLinks = () => {
  const translate = useContext(LanguageContext);
  return (
    <ul className="content-links bor-bottom d-flex align-items-center justify-content-around">
      <li>
        <NavLink className="links-item  c-first font_title fs_1-5" to="/">
          {translate.mainPage.resume.title}
        </NavLink>
      </li>
      <li className="links-item">
        <NavLink className="links-item c-first font_title fs_1-5" to="/project">
          {translate.projectPage.titleSEC}
        </NavLink>
      </li>
      <li className="links-item">
        <NavLink className="links-item c-first font_title fs_1-5" to="/contact">
          {translate.contactPage.title}
        </NavLink>
      </li>
    </ul>
  );
};

export default ContentLinks;
