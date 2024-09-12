
import './App.css'
import { useContext } from "react";
import { ThemeContext } from "../Contexts/theme.jsx";
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Show from './pages/Show.jsx'
import About from './Component/About/About.jsx'
import Skills from './Component/Skills/Skills.jsx'
import Servic from './Component/Servic/Servic.jsx'
import Projects from './Component/Projects/Projects.jsx'
import Contactme from './Component/Contactme/Contactme.jsx'
function App() {
 
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div  style={{ backgroundColor: theme.backgroundImage }}>
       <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/About' element={<About/>}/>
        <Route  path='/Skills' element={<Skills/>}/>
        <Route  path='/Service' element={<Servic/>}/>
        <Route  path='/Projects' element={<Projects/>}/>
        <Route  path='/Contactme' element={<Contactme/>}/>
        <Route  path='/Show/:id' element={<Show/>}/>
      </Routes> 
    </div>
      
  
  )
}

export default App
