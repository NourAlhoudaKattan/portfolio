import React from "react";
import { useContext } from 'react'
import { ThemeContext } from '../../../Contexts/theme'
import ui from "../../assets/img/ui.png";
import ux from "../../assets/img/ux.png";
import web from "../../assets/img/web.png";
import "./Servic.css";
const Servic = () => {
  const [{theme,isDark},toggleTheme]=useContext(ThemeContext)
  console.log(theme)
  return (
    <div className="pserv" id="Service"  style={{ backgroundColor: theme.backgroundImage,color: theme.color }}>
      <h1  className={isDark?'titledark':'titlelight'}>Service</h1>
      <div className="serv">
        <div className="card-serv" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img src={ui} alt="" />
          <p> I create user-friendly designs to make your app or website look great and easy to use and frindlly</p>
        </div>
        <div className="card-serv" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img src={ux} alt="" />
          <p>I specialize in designing attractive user interfaces to make your app or website stand out with a unique </p>
        </div>
        <div className="card-serv" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img src={web} alt="" />
          <p>I create user-friendly designs for websites as a Frontend Developer to make sure users have a smooth </p>
        </div>
      </div>
    </div>
  );
};

export default Servic;
