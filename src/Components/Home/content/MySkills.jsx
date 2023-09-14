import React, { useContext, useEffect, useRef } from "react";
import "./mySkills.css";
import iconSkill from "../../../images/icons/icons8-html.gif";
import iconSkill_1 from "../../../images/icons/css.png";
import iconSkill_2 from "../../../images/icons/icons8-bootstrap-64.png";
import iconSkill_3 from "../../../images/icons/icons8-js.gif";
import iconSkill_4 from "../../../images/icons/icons8-react.gif";
import iconSkill_5 from "../../../images/icons/next-js.svg";
import iconSkill_6 from "../../../images/icons/icons8-redux-48.png";
import icon from "../../../images/icons/icons8-code.gif";
import LanguageContext from "../../../Context/LanguageContext";
import { Zoom } from "react-awesome-reveal";
const MySkills = () => {
  const refSection = useRef();
  const translate = useContext(LanguageContext);
  const skillsTEXTS = translate.mainPage;
  const skillObj = [
    {
      iconTitle: "HTML5",
      skillProg: "99%",
      skillImg: iconSkill,
    },
    {
      iconTitle: "CSS",
      skillProg: "96%",
      skillImg: iconSkill_1,
    },
    {
      iconTitle: "Bootstrap",
      skillProg: "92%",
      skillImg: iconSkill_2,
    },
    {
      iconTitle: "JS",
      skillProg: "95%",
      skillImg: iconSkill_3,
    },
    {
      iconTitle: "React JS",
      skillProg: "94%",
      skillImg: iconSkill_4,
    },
    {
      iconTitle: "Next JS",
      skillProg: "90%",
      skillImg: iconSkill_5,
    },
    {
      iconTitle: "Redux",
      skillProg: "89%",
      skillImg: iconSkill_6,
    },
  ];
  // const skillSection = useRef();

  useEffect(() => {
    const skillSection = document.querySelector(".skill-content");
    let progressies = document.querySelectorAll("#progress-span");

    window.onscroll = () => {
      const position = skillSection.getBoundingClientRect();

      if (position.bottom <= window.scrollY) {
        progressies.forEach((p) => {
          p.classList.toggle("active");
          p.style.width = p.dataset.prog;
        });
      }
    };
  });
  return (
    <>
      <div className="edu-title skill-head d-flex align-items-center gap-3">
        <img className="icon-gif" src={icon} alt="" />
        <span className="c-second font_title fs_2 ">
          {skillsTEXTS.skillTitle}
        </span>
      </div>

      <div className="skill-content bor-rounded">
        <Zoom triggerOnce="true">
          <div className="skill-items" ref={refSection}>
            {skillObj.map((skill, i) => {
              return (
                <div key={i} className="item">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="c-first fs_1-8">
                      {skill.iconTitle}
                      <span className="c-gray prog-num">{skill.skillProg}</span>
                    </p>
                    <img width={30} src={skill.skillImg} alt="skills image" />
                  </div>
                  <span className="skill-progress position-relative">
                    <span
                      id="progress-span"
                      data-prog={skill.skillProg}
                      style={{ width: 0 }}
                      className="prog"
                    ></span>
                  </span>
                </div>
              );
            })}
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default MySkills;
