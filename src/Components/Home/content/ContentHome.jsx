import React from "react";
import { Route, Routes } from "react-router-dom";
import ResumeSection from "./ResumeSection";
import ContentLinks from "./ContentLinks";
import "./contentHome.css";
import Project from "./project";
import ContactSection from "./ContactSection";
const ContentHome = () => {
  return (
    <div className="content-home box-shadow">
      <ContentLinks />
      <div>
        <Routes>
          <Route path="/" element={<ResumeSection />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
    </div>
  );
};

export default ContentHome;
