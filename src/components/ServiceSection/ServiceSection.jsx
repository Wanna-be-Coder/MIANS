import React, { useState } from "react";
import TabButton from "../TabButton/TabButton";
import style from "./ServiceSection.module.css";
import {
  brandGuideLineText,
  businessDevText,
  designText,
  webDevText,
} from "./paragraphs";

import BrandGuideLineImage from "./brandGuideLine.svg";
import BusinessDevImage from "./BUSINESSDEV.svg";
import DesignImage from "./DESIGN.svg";
import WebAppImage from "./WEBAPP.svg";
import "./ServiceSection.module.css";

export const ServiceSection = () => {
  const [selected, setselected] = useState("Brand Strategy");
  const [fade, setFade] = useState(true);

  const handleClick = (text) => {
    setFade(true);
    setselected(text);
  };
  const handleAnimationEnd = () => {
    setFade(false);
  };
  // let descriptionClass = {
  //   ...style.descriptionText,
  //   ...style.slideLeft,
  // };

  // useEffect(() => {
  //   if (fade) {
  //   }
  // }, [fade]);
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

      <div>
        <div className={style.tabSections}>
          <TabButton
            name="Brand Strategy"
            handleClick={handleClick}
            selected={selected}
            handleAnimationEnd={handleAnimationEnd}
          />
          <TabButton
            name="Business Development"
            handleClick={handleClick}
            selected={selected}
            handleAnimationEnd={handleAnimationEnd}
          />
          <TabButton
            name="Design"
            handleClick={handleClick}
            selected={selected}
            handleAnimationEnd={handleAnimationEnd}
          />
          <TabButton
            name="Web Application"
            handleClick={handleClick}
            selected={selected}
            handleAnimationEnd={handleAnimationEnd}
          />
        </div>
        <br />

        <section>
          <div className={style.description}>
            <div
              className={
                fade
                  ? [style.descriptionText, style.slideLeft].join(" ")
                  : style.descriptionText
              }
              onAnimationEnd={() => handleAnimationEnd()}
            >
              <p id="description">
                {" "}
                <br /> <br />
                <span>
                  {selected === "Brand Strategy"
                    ? brandGuideLineText
                    : selected === "Business Development"
                    ? businessDevText
                    : selected === "Design"
                    ? designText
                    : webDevText}
                </span>
              </p>
            </div>
            <div
              className={
                fade
                  ? [style.descriptionImg, style.slideRight].join(" ")
                  : style.descriptionImg
              }
              onAnimationEnd={() => handleAnimationEnd()}
            >
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
                alt={selected}
              />
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
    </div>
  );
};
