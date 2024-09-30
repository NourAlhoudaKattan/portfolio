import './Footer.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../Contexts/theme'
import bcfooter from '../../assets/img/bcfooter.png'
import bcfooterdark from '../../assets/img/bcfooterdark.png'

import insta from '../../assets/img/insta-footer.svg'
import face from '../../assets/img/facebook-footer.svg'
import tele from '../../assets/img/tele-footer.svg'
import linkedin from '../../assets/img/in-footer.svg'

import linkedinwhite from '../../assets/img/in-white-footer.svg'
import facebookwhite from '../../assets/img/facebook-white-footer.svg'
import instaWhite from '../../assets/img/insta-white-footer.svg'

import teleWhite from '../../assets/img/tele-white-footer.svg'


const Footer = ({menu}) => {
  const [{theme,isDark},toggleTheme]=useContext(ThemeContext)

  return (
    <div  style={{ backgroundColor: theme.backgroundImage,color: theme.color }}>
    <div className='footer'  style={isDark?{backgroundImage:`url(${bcfooterdark})`}:{backgroundImage:`url(${bcfooter})`}}>
    {/* <Navbar  menu={[{path:"Hero",title:"Home"},
                              {path:"About",title:"About Me"},
                              {path:"Skills",title:"Skills"},
                              {path:"Projects",title:"Projects"},
                              {path:"Contactme",title:"Contact Me"}
                              ]} bccolor={false}  />  */}
      <ul className='ul-footer'>
    <li>   <a href='#Hero'  >Home</a></li>
    <li>   <a href='#About'  >About Me</a></li>
      <li>  <a href='#Skills'  > Skills</a></li>
     <li>   <a href='#Projects' > Projects</a></li>
      <li>  <a href='#Contactme' >Contact Me</a></li>
   
      </ul>
      <div className='icon-sochial' id='iconfooter'>
      <a href="https://www.instagram.com/nouralhodakattan?igsh=MXZpMnQ1Z3FleGZqNA=="><img src={instaWhite} alt="" /></a> 
      <a href="https://www.facebook.com/nouralhoda.katan?mibextid=JRoKGi"> <img src={facebookwhite} alt="" /></a>
      <a href="https://t.me/Nouralhoudakattan"> <img src={teleWhite}  alt="" /></a> 
            <img src={linkedinwhite}  alt="" />
        </div>  
    </div>
    </div>
 
  )
}

export default Footer