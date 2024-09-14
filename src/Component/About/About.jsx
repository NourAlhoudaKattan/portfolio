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
          <p>
            Hello, I'm Nour Al-Huoda. I'm an IT engineer specialized in
            designing and developing user interfaces. I work on merging
            creativity and technology to deliver unique digital solutions that
            meet users' needs.
          </p>
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
            <a href="#">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
