import React from "react";
import style from "./ContactSection.module.css";
import { ContactUsForm } from "./ContactUsForm";

const ContactSection = () => {
  return (
    <div>
      <div className={`${style.caseStudy}`}>
        <div className={`${style.caseStudyContent}`}>
          <h3 className="white">How do we work?</h3>
          <p className="white">
            We have a focused, sound and innovative approach which is derived
            from the cumulative experience of our team members and as a result
            of their combined practical business experience and knowledge. We
            exceed in understanding the client’s business requirements and
            propose solutions regarding IT and Creative strategies in line with
            the vision of the business and execute the plan accordingly either
            by building or implementing high quality scale-able solutions
            through the use of latest cutting edge technologies.
          </p>
        </div>
      </div>
      <ContactUsForm />
      <p align="center">© 2021 MIANS. All rights reserved.</p>
    </div>
  );
};

export default ContactSection;
