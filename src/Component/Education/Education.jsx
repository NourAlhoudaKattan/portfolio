import React from "react";
import "./Education.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";

const Education = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <h1 className={isDark ? "titledark" : "titlelight"}>
        Education & Experience
      </h1>
      <div className="timeline">
        <div className="container lift-container">
          <div className="text-box-edu">
            <div className="date">
               <h3>UNIVERSITY</h3>
            <small>2019-2024</small></div>
           
            <div className="se">
              <p>
                graduated from the Faculty of Informatics Engineering at
                Al-Baath University
              </p>
              <p>2024</p>
            </div>
          </div>
        </div>

        <div className="container right-container">
          <div className="text-box-edu">
          <div className="date">
            <h3>UI/UX</h3>
            <small>3/2024-7/2024</small></div>
            <div className="se">
              <p>I completed this training with Vica Web Solution</p>
              <p>2024</p>
            </div>
          </div>
        </div>

        <div className="container lift-container">
          <div className="text-box-edu">
          <div className="date">
            <h3>FRONT-END</h3>
            <small >9/2023-1/2024</small></div>
            <div className="se">
              <p>I completed this training with Vica Web Solution</p>
              <p>2023</p>
            </div>
          </div>
        </div>
        <div className="container right-container">
          <div className="text-box-edu">
          <div className="date">
            <h3>UI/UX</h3>
            <small >5/2023-7/2023</small></div>
            <div className="se">
              <p>I completed this training with the Sanad team</p>
              <p>2023</p>
            </div>
          </div>
        </div>
        <div className="container lefy-container">
          <div className="text-box-edu">
          <div className="date">
          <h3>PHOTOSHOP</h3>
          <small >3/2023-5/2023</small></div>
            <div className="se">
              <p>I completed this training with the Sanad team</p>
              <p>2023</p>
            </div>
          </div>
        </div>
        <div className="container right-container">
          <div className="text-box-edu">
          <div className="date">
          <h3>MARKITING</h3>
          <small >8/2022-10/2022</small></div>
            <div className="se">
              <p>I completed this training with the Sanad team</p>
              <p>2022</p>
            </div>
          </div>
        </div>







      </div>
    </div>
  );
};

export default Education;
