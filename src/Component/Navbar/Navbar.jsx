import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import "./Navbar.css";
import NAK from "../../assets/img/NAK.png";
import moon from "../../assets/img/moon.svg";
import X from "../../assets/img/X.svg";
import menue from "../../assets/img/menue.svg";
import sun from "../../assets/img/sun.svg";
import xlight from "../../assets/img/xlight.svg";
import togglelight from "../../assets/img/toggellight.svg";
import toggeldark from "../../assets/img/toggeldark.svg";
import line from "../../assets/img/line.png";
import { useState } from "react";
// import { Link} from "react-router-dom";
 import { Link } from "react-scroll";

function changeBg() {
  let navbar = document.getElementsByClassName("Nav");
  let scroll = window.scrollY;
  if (scroll < 200) {
    navbar[0].classList.remove("navbarScroll");
  } else {
    navbar[0].classList.add("navbarScroll");
  }
}
window.addEventListener("scroll", changeBg);

const Navbar = ({ menu, bccolor }) => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  const [list, setlist] = useState(false);
  const [Home, setHome] = useState("");
console.log(Home)
  return (
    <div>
      <div className={bccolor ? "Navcolor" : "Nav"}>
        <img src={NAK} alt="" />
        <ul>
          {menu.map((e, index) => {
            return (
              <li key={index}>
                <Link activeClass="active"  to={e.path} spy={true} smooth={true} offset={1} duration={500} className="TEXTNAV-LINE">
                <p onClick={()=>{setHome(e.title)}}> {e.title}</p> 
                 {Home=== e.title?<img src={line} className="imgline"/>:<></>}
                </Link>
               
              </li>
            );
          })}
        </ul>
        <img
          src={isDark ? sun : moon}
          onClick={toggleTheme}
          alt=""
          className="moon"
        />
        <img
          src={menue}
          alt=""
          className="menuicon"
          onClick={() => setlist(!list)}
        />
      </div>

      <div className="pdivleft">
        <div
          className="divleft"
          style={{
            display: list ? "block" : "none",
            backgroundColor: theme.backgroundImage,
            color: theme.color,
          }}
        >
          <img
            src={isDark ? xlight : X}
            alt=""
            onClick={() => setlist(!list)}
            className="X"
          />
          <ul>
            {menu.map((e, index) => {
              return (
                <li key={index}>
                  <Link
                    activeClass="active"
                    to={e.path}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr id="line" />
          <div className="text-light">
            <img
              src={isDark ? togglelight : toggeldark}
              onClick={toggleTheme}
            />
            <span id="light"> {isDark ? "Dark mood" : "Light mood"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
