import React from "react";
import InfoHeadPage from "./InfoHeadPage";
import { Container } from "react-bootstrap";
import SideInfoHome from "./SideInfoHome";
import ContentHome from "./content/ContentHome";
import "./homepage.css";
import { Flip, Slide, Zoom } from "react-awesome-reveal";
const HomePage = () => {
  return (
    <>
      <Zoom triggerOnce="true">
        <InfoHeadPage />
      </Zoom>
      <Container>
        <div className="d-flex gap-5 align-items-start justify-content-center page-content">
          <Slide direction="left" triggerOnce="true">
            <SideInfoHome />
          </Slide>
          <ContentHome />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
