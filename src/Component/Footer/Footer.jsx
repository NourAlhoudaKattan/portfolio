import './Footer.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../Contexts/theme'
import bcfooter from '../../assets/img/bcfooter.png'
import bcfooterdark from '../../assets/img/bcfooterdark.png'
import insta from '../../assets/img/instagram.svg'
import face from '../../assets/img/facebook.svg'
import tele from '../../assets/img/telegram.svg'
import linkedin from '../../assets/img/in.svg'

const Footer = () => {
  const [{theme,isDark},toggleTheme]=useContext(ThemeContext)

  return (
    <div  style={{ backgroundColor: theme.backgroundImage,color: theme.color }}>
    <div className='footer'  style={isDark?{backgroundImage:`url(${bcfooterdark})`}:{backgroundImage:`url(${bcfooter})`}}>
     <p>Get ready to achieve your digital dreams and let's be partners in success. By transforming your ideas into an amazing reality through designing</p>
      {/* <div className='icon-sochial' id='iconfooter'>
            <img src={insta} alt="" />
            <img src={face} alt="" />
            <img src={tele} alt="" />
            <img src={linkedin} alt="" />
        </div>  */}
    </div>
    </div>
 
  )
}

export default Footer