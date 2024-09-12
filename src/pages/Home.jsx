import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Hero from '../Component/Hero/Hero'
import About from '../Component/About/About'
import Slider from '../Component/Skills/Skills'
import Servic from '../Component/Servic/Servic'
import Projects from '../Component/Projects/Projects'
import Contactme from '../Component/Contactme/Contactme'
import Footer from '../Component/Footer/Footer'
const Home = () => {
  return (
    <div>
          <Navbar       menu={[{path:"Hero",title:"Home",},
                              {path:"About",title:"About Me"},
                              {path:"Skills",title:"Skills",},
                              {path:"Service",title:"Service"},
                              {path:"Projects",title:"Projects"},
                              {path:"Contactme",title:"Contact Me"}
                              ]} bccolor={false}  />  
       {/* <Navbar menu={["Home","About Me","Skills","Service","Projects","Contact Me"]} bccolor={false}/>  */}
       <Hero title={"Nour Alhouda Kattan" } text1={"Frontend Developer"} text2={"and"} text3={"UI/UX Designer"}/>
      <About/> 
        <Slider/> 
       <Servic/>
       <Projects/> 
      <Contactme/>
       <Footer/>  
      
    </div>
  )
}

export default Home
