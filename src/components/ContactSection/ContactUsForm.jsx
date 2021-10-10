import React from "react";
import style from "./ContactSection.module.css";
import emailjs from "emailjs-com";

export const ContactUsForm = () => {
  //TODO: Send Data via sendgrid API
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.send(
      "service_jjgwij9",
      "template_av6i7sg",
      {
        from_name: `${e.target[0].value} ${e.target[1].value}`,
        to_name: "Mians",
        message: `Email from ${e.target[2].value} question ${e.target[3].value}`,
      },
      "user_RxtDafHtqob6PVxBex7zY"
    );
    alert("Thank you for contacting us");
    document.getElementById("myForm").reset();
  };
  return (
    <div>
      <h1 className={`${style.contactUs}`}>Contact Us</h1>
      <form onSubmit={handleSubmit} id="myForm">
        <div className={`${style.inputFieldContainer}`}>
          <input
            name="firstName"
            className={`${style.inputField} ${style.name}`}
            placeholder="First Name"
            required
          />
          <input
            name="lastName"
            className={`${style.inputField} ${style.name}`}
            placeholder="Last Name"
            required
          />
        </div>
        <br />
        <br />
        <div className={`${style.inputFieldContainer}`}>
          <input
            type="email"
            name="email"
            className={`${style.inputField} ${style.email} `}
            placeholder="Email"
            required
          />
        </div>
        <br />
        <br />
        <div className={`${style.inputFieldContainer}`}>
          <textarea
            name="enquiry"
            className={`${style.textAreaField} ${style.description} `}
            placeholder="Enquiry"
            required
          />
        </div>
        <br />
        <br />
        <div className={`${style.inputFieldContainer}`}>
          <button type="submit" className={`${style.submitButton} white`}>
            Send <b>{` >`}</b>
          </button>
        </div>
        <br/>
        <br/>
        <p align="center "> All rights reserved &copy; MIANS</p>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};
