import React, { useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import MyImage_1 from "../../images/Myimg_1.jpeg";
import "../../style/commin.css";
import "./infoHeadPage.css";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../Context/LanguageContext";
import { Typewriter } from "react-simple-typewriter";
import VanillaTilt from "vanilla-tilt";
// import dowenloadCV from "../../images/"
const InfoHeadPage = () => {
  const translate = useContext(LanguageContext);
  const myImage = useRef(null);
  const option = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };
  useEffect(
    (_) => {
      VanillaTilt.init(myImage.current, option);
    },
    [option]
  );

  return (
    <>
      <Container>
        <div className="head-page d-flex align-items-center">
          <div ref={myImage} className="head-img">
            <img src={MyImage_1} alt="ahmed nazeel image" />
          </div>
          <div className="head-info">
            <span
              className="font_rubik fw-bold fs_1-8 typewriter"
              style={{ color: "#ddd" }}
            >
              <Typewriter
                words={[translate.mainPage.jopTitle]}
                loop="true"
                cursor
                cursorStyle="_"
                typeSpeed={140}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </span>

            <h1 className="fs_3-6 c-namePage font_title py-3 name">
              {translate.mainPage.name}
            </h1>
            <p className="fs_1-8 f-italic c-gray">
              {translate.mainPage.jopDescription}
            </p>
            <div className="head-contact d-flex align-items-center">
              <a
                target="_blank"
                className="tel c-second "
                href="tel:+2001009053248"
              >
                <FontAwesomeIcon icon={faPhoneVolume} />
                +20 01009053248
              </a>
              <a
                target="_blank"
                className="email font_rubik c-second"
                href="https://ahmednazeel705@gmail.com"
              >
                <FontAwesomeIcon className="c-second" icon={faPaperPlane} />
                ahmednazeel705@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InfoHeadPage;

/**
 *         document.documentElement.style.setProperty("--mainColor",e.target.dataset.color);

 *  <span className="c-second">A</span>hmed <span className="c-second">W</span>aled <span className="c-second">N</span>azeel
 */
