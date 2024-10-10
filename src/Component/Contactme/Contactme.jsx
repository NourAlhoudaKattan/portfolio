import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import email from "../../assets/img/emailnew.svg";
import phone from "../../assets/img/phonenew.svg";
import location from "../../assets/img/location.svg";
import instagram from "../../assets/img/instagram.svg";
import facebook from "../../assets/img/facebook.svg";
import telegram from "../../assets/img/telegram.svg";
import linkedin from "../../assets/img/in.svg";
import "./Contactme.css";

const Contactme = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div
      className="contactme"
      id="Contactme"
      style={{ backgroundColor: theme.backgroundImage, color: theme.color }}
    >
      <h1 className={isDark ? "titledark" : "titlelight"}>Contact Me</h1>
      <div className="sochial-form">
        <div className="sochial" data-aos="fade-up" data-aos-duration="3000">
          <div className="contact-sochial">
            <img src={email} alt="" />
            <div className="contact-sochial-text">
              <h3>Email</h3>
              <p>nwralhdyqtan14@gmail.com</p>
            </div>
          </div>
          <div className="contact-sochial">
            <img src={phone} alt="" />
            <div className="contact-sochial-text">
              <h3>Phone</h3>
              <p>0956703387</p>
            </div>
          </div>
          <div className="contact-sochial">
            <img src={location} alt="" />
            <div className="contact-sochial-text">
              <h3>Location</h3>
              <p>Hama-Syria</p>
            </div>
          </div>
          <div className="icon-sochial">
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
              {" "}
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
        <div className="form" data-aos="fade-up" data-aos-duration="3000">
          <div className="form-g">
            <h3>Name</h3>
            <input
              type="text"
              placeholder="enter your name"
              className={isDark ? "form-input-dark" : "form-input" } style={{ backgroundColor: theme.backgroundImage }}
            />
          </div>
          <div className="form-g">
            <h3>Email</h3>
            <input
              type="text"
              placeholder="enter your email"
              className="form-input"
              style={{ backgroundColor: theme.backgroundImage }}
            />
          </div>
          <div className="form-g">
            <h3>Message</h3>
            <input
              type="text"
              placeholder="enter your message"
              id="message"
              className="form-input"
              style={{ backgroundColor: theme.backgroundImage }}
            />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
