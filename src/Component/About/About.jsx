import "./About.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import imgabout from "../../assets/img/imgabout9.png";
import instagram from "../../assets/img/instagram.svg";
import facebook from "../../assets/img/facebook.svg";
import telegram from "../../assets/img/telegram.svg";
import linkedin from "../../assets/img/in.svg";

const About = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className="About"
      id="About"
      style={{ backgroundColor: theme.backgroundImage, color: theme.color }}
    >
      <h1 className={isDark ? "titledark" : "titlelight"}>About Me</h1>
      <div
        className="img-text-About"
      >
        <div className="img-about">
          <img src={imgabout} />
        </div>
        <div className="text-icon">
          <h3>I'm Nour Alhouda Kattan</h3>
          <h4>Software Engineer</h4>
           <p style={{ backgroundColor: theme.backgroundImage, color: theme.color }}>
             I'm Nour Al-Huoda. I'm software engineer graduated from the Faculty of Informatics Engineering at Al-Baath University and i specialized in
            designing and developing user interfaces. 
          </p   > 
          <div className="icon-about">
            <a href="https://www.instagram.com/nouralhodakattan?igsh=MXZpMnQ1Z3FleGZqNA==">
              <img src={instagram} alt="" />
            </a>
            <a href="https://www.facebook.com/nouralhoda.katan?mibextid=JRoKGi">
              <img src={facebook} alt="" />
            </a>
            <a href="https://t.me/Nouralhoudakattan">
              <img src={telegram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/nour-alhouda-kattan">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
