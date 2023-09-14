import React, { useContext, useRef } from "react";
import "./contactSection.css";
import iconEmail from "../../../images/icons/icons8-gmail-logo.gif";
import iconPaper from "../../../images/icons/icons8-paper-plane.gif";
import LanguageContext from "../../../Context/LanguageContext";
import { sendForm } from "emailjs-com";
import Swal from "sweetalert2";
import { Slide, Zoom } from "react-awesome-reveal";
const ContactSection = () => {
  const form = useRef();
  const translate = useContext(LanguageContext);
  const contactTEXTS = translate.contactPage;
  const sendEmail = (e) => {
    e.preventDefault();
    sendForm(
      "service_6xwcyon",
      "template_6ao11wp",
      form.current,
      "ClhJJ4eljGvwgNQrH"
    ).then(
      (_) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "i received your email",
          showConfirmButton: false,
          timer: 2500,
        });
      },
      (_) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title:
            "there is an error in your input or there is a malfuncion within th settings... we fix it in the quickest time you can contact my on ahmednazeel705@gmail.com ",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    );
  };
  return (
    <>
      <div className="d-flex align-items-center gap-4  title-contact">
        <img className="icon-gif" src={iconEmail} alt="icon email" />
        <h2 className="title-comp font_title c-titleSection">
          {contactTEXTS.titleSEC}
        </h2>
      </div>
      <div className="contact-form">
        <h4 className="c-third mb-5">{contactTEXTS.subTitle}</h4>
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputs d-flex align-items-center gap-5 mb-5">
            <input
              className="fs_1-8"
              name="user_name"
              type="text"
              placeholder={contactTEXTS.inputs[0]}
            />
            <input
              className="fs_1-8"
              name="user_email"
              type="email"
              placeholder={contactTEXTS.inputs[1]}
            />
          </div>
          <textarea
            className="fs_1-8"
            placeholder={contactTEXTS.inputs[2]}
            name="message"
            id="subject"
          ></textarea>

          <button className="d-flex align-items-center justify-content-center">
            {contactTEXTS.inputs[3]}
            <img className="icon-gif" src={iconPaper} alt="" />
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactSection;
