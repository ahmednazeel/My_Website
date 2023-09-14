import React, { useContext, useEffect, useRef } from "react";
import "./resumeSection.css";
import "../../../style/commin.css";
import icon_edu from "../../../images/icons/icons8-book.gif";
import icon_edu1 from "../../../images/icons/icons8-experience.gif";
import img_certificate from "../../../images/Coursera LGCYNFGD95CD_page-0001.jpg";
import img_certificate1 from "../../../images/download_page-0001.jpg";
import MySkills from "./MySkills";
import resumeGif from "../../../images/icons/resume.gif";
import LanguageContext from "../../../Context/LanguageContext";
import { Bounce, Flip, Hinge, Roll, Slide, Zoom } from "react-awesome-reveal";
import { Fade } from "react-bootstrap";
const ResumeSection = () => {
  const translate = useContext(LanguageContext);
  const resumeTEXTS = translate.mainPage.resume;
  const eductionSEC = useRef();
  const experienceSEC = useRef();

  useEffect(
    (_) => {
      let dirRight = "rtl";

      if (document.body.dir === dirRight) {
        eductionSEC.current.classList.add("dir-right");
        experienceSEC.current.classList.add("dir-right");
      } else {
        eductionSEC.current.classList.remove("dir-right");
        experienceSEC.current.classList.remove("dir-right");
      }
    },
    [document.body.dir]
  );

  return (
    <>
      <div className="d-flex align-items-center gap-4  title-contact">
        <img className="icon-gif" src={resumeGif} alt="icon email" />
        <h2 className="title-comp font_title c-titleSection">
          {resumeTEXTS.title}
        </h2>
      </div>
      <div className="eductions" ref={eductionSEC}>
        <Roll triggerOnce="tyre">
          <div className="edu-title d-flex align-items-center gap-3">
            <img className="icon-gif" src={icon_edu} alt="" />
            <span className="fs_2 c-second">
              {resumeTEXTS.sec_eduction.headSEC}
            </span>
          </div>
          <div className="edu-box">
            <h3 className="title-certificate c-third">
              {resumeTEXTS.sec_eduction.university}
            </h3>
            <span className="fs_1-5 c-second certificate-years">
              2023 - 2024
            </span>
            <p className="c-third fs_1-8">
              {resumeTEXTS.sec_eduction.discCertificate}
            </p>
          </div>
        </Roll>
      </div>
      <div className="eductions experience" ref={experienceSEC}>
        <div className="edu-title d-flex align-items-start gap-3">
          <img className="icon-gif" src={icon_edu1} alt="" />
          <span className="c-second fs_2 ">
            {resumeTEXTS.sec_experience.experience}
          </span>
        </div>

        <div className="edu-box one d-flex align-items-center">
          <Bounce triggerOnce="true">
            <div className="certificate-info">
              <h3 className="title-certificate c-third">
                {resumeTEXTS.sec_experience.sec_certificate_1[0]}
              </h3>
              <span className="fs_1-5 c-second certificate-years">
                2021 - 2022
              </span>
              <p className="c-third fs_1-8">
                {resumeTEXTS.sec_experience.sec_certificate_1[2]}
              </p>
            </div>
          </Bounce>
          <Zoom triggerOnce="true">
            <a
              target="_blank"
              href="https://graduation.udacity.com/confirm/VGEKJCLC"
              className="certificate-img"
            >
              <img src={img_certificate1} alt="" />
            </a>
          </Zoom>
        </div>

        <div className="edu-box d-flex align-items-center">
          <Bounce triggerOnce="true">
            <div className="certificate-info">
              <h3 className="title-certificate c-third">
                {resumeTEXTS.sec_experience.sec_certificate_two[0]}
              </h3>
              <span className="fs_1-5 c-second certificate-years">
                2021 - 2022
              </span>
              <p className="c-third fs_1-8">
                {resumeTEXTS.sec_experience.sec_certificate_two[2]}
              </p>
            </div>
          </Bounce>
          <Zoom triggerOnce="ture">
            <a
              target="_blank"
              href="https://coursera.org/share/46993b236a299d4bd0970259ff6e169f"
              className="certificate-img"
            >
              <img src={img_certificate} alt="" />
            </a>
          </Zoom>
        </div>
      </div>
      <MySkills />
    </>
  );
};

export default ResumeSection;
