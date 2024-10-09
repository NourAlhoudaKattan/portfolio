import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import ShowDetails from '../Component/ShowDetails/ShowDetails'
const Show = () => {

  return (

    <div>
       {/* <Navbar   menu={[{path:"/",title:"Home",},
                              {path:"/About",title:"About Me"},
                              {path:"/Skills",title:"Skills",},
                              {path:"/Service",title:"Service"},
                              {path:"/Projects",title:"Projects"},
                              {path:"/Contactme",title:"Contact Me"}
                              ]} bccolor={true}  />   */}
         <ShowDetails/>
           {/* <Footer/>  */}
    </div>
  )
}

export default Show
