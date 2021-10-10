import React, { useState } from "react";
import TabButton from "../TabButton/TabButton";
import style from "./ServiceSection.module.css";
import {
  brandGuideLineText,
  businessDevText,
  designText,
  webDevText,
} from "./paragraphs";
// import Image from "next/image";
import BrandGuideLineImage from "./brandGuideLine.svg";
import BusinessDevImage from "./BUSINESSDEV.svg";
import DesignImage from "./DESIGN.svg";
import WebAppImage from "./WEBAPP.svg";

export const ServiceSection = () => {
  const [selected, setselected] = useState("Brand Strategy");
  const handleClick = (text) => {
    setselected(text);
  };
  return (
    <div>
      <div className="logo">
        <h1>Our Service</h1>
        <p style={{ textAlign: "center" }}>
          We are a one stop solution for all your digital needs. Our main
          objective is <br /> to satisfy the ever-evolving digital experience of
          your clients and business <br /> through our strategies and flexible
          end-to-end services.
        </p>
      </div>
      <br />
      <div className={style.tabSections}>
        <TabButton
          name="Brand Strategy"
          handleClick={handleClick}
          selected={selected}
        />
        <TabButton
          name="Business Development"
          handleClick={handleClick}
          selected={selected}
        />
        <TabButton
          name="Design"
          handleClick={handleClick}
          selected={selected}
        />
        <TabButton
          name="Web Application"
          handleClick={handleClick}
          selected={selected}
        />
      </div>
      <br />

      <div className={style.description}>
        <p className={style.half}>
          {" "}
          <br /> <br />
          {selected === "Brand Strategy"
            ? brandGuideLineText
            : selected === "Business Development"
            ? businessDevText
            : selected === "Design"
            ? designText
            : webDevText}
        </p>
        <div>
          <img
            src={
              selected === "Brand Strategy"
                ? BrandGuideLineImage
                : selected === "Business Development"
                ? BusinessDevImage
                : selected === "Design"
                ? DesignImage
                : WebAppImage
            }
            alt="BrandGuideLine"
            className={style.half}
            width={418.7}
            height={421.18}
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
