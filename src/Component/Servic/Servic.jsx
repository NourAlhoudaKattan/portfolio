import React from "react";
import { useContext } from 'react'
import { ThemeContext } from '../../../Contexts/theme'
import ui from "../../assets/img/ui.png";
import ux from "../../assets/img/ux.png";
import web from "../../assets/img/web.png";
import "./Servic.css";
const Servic = () => {
  
    let servic = [
      {id:1,img:ui,text:"I create user-friendly designs to make your app or website look great and easy to use and frindlly"},
      {id:2,img:ux,text:"I specialize in designing attractive user interfaces to make your app or website stand out with a unique" },
      {id:3,img:web,text:"I create user-friendly designs for websites as a Frontend Developer to make sure users have a smooth"  }
    ];
  const [{theme,isDark},toggleTheme]=useContext(ThemeContext)
  console.log(theme)
  return (
    <div className="pserv" id="Service"  style={{ backgroundColor: theme.backgroundImage,color: theme.color }}>
      <h1  className={isDark?'titledark':'titlelight'}>Service</h1>
      <div className="serv">
      {servic.map(e=>{
        return   <div className="card-serv" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  
           <img src={e.img} alt="" />
           <p> {e.text}</p>
        </div>
      })

      }
      </div>
    </div>
  );
};

export default Servic;
