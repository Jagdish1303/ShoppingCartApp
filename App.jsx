import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

  const [currentMode, setCurrentMode] = useState("light")

  const startupTheme = () =>{
    let temp = localStorage.getItem('theme');
    if(temp==='dark'){
        document.documentElement.style.setProperty('--bg-color', 'rgb(255,255,255)')
        document.documentElement.style.setProperty('--header-color', 'rgb(15, 23, 42)')
        document.documentElement.style.setProperty('--header-text-color', 'rgb(241, 245, 249)')
        document.documentElement.style.setProperty('--Card-title-color', 'rgb(55, 65, 81)')
        document.documentElement.style.setProperty('--Card-Desc-color', 'rgb( 156, 163, 175)')
        document.documentElement.style.setProperty('--slider-on', 'translateX(26px)')

        setCurrentMode('light');
    }
    else{
      document.documentElement.style.setProperty('--bg-color', 'rgb(0,0,0)')
      document.documentElement.style.setProperty('--header-color', 'rgb(0, 0, 0)')
      document.documentElement.style.setProperty('--header-text-color', 'rgb(255, 255, 255)')
      document.documentElement.style.setProperty('--Card-title-color', 'rgb(255, 255, 255)')
      document.documentElement.style.setProperty('--Card-Desc-color', 'rgb( 255, 255, 255)')
      
        setCurrentMode('dark');
    }

}

// set dark mode and light mode 
const handleChangeTheme = () =>{
if(currentMode === 'dark'){
  document.documentElement.style.setProperty('--bg-color', 'rgb(255,255,255)')
  document.documentElement.style.setProperty('--header-color', 'rgb(15, 23, 42)')
  document.documentElement.style.setProperty('--header-text-color', 'rgb(241, 245, 249)')
  document.documentElement.style.setProperty('--Card-title-color', 'rgb(55, 65, 81)')
  document.documentElement.style.setProperty('--Card-Desc-color', 'rgb( 156, 163, 175)')

    localStorage.setItem('theme', 'dark')
    setCurrentMode('light')
}
else{
  document.documentElement.style.setProperty('--bg-color', 'rgb(0,0,0)')
  document.documentElement.style.setProperty('--header-color', 'rgb(0, 0, 0)')
  document.documentElement.style.setProperty('--header-text-color', 'rgb(255, 255, 255)')
  document.documentElement.style.setProperty('--Card-title-color', 'rgb(255, 255, 255)')
  document.documentElement.style.setProperty('--Card-Desc-color', 'rgb( 255, 255, 255)')


    localStorage.setItem('theme', 'light')
    setCurrentMode('dark')
    }
}

useEffect(() =>{
  startupTheme()
}, [currentMode])

  return (
    <div className="w-screen max-h-screen">

      <div className="bg-[--header-color] w-full border-b">
        <Navbar handleChangeTheme ={handleChangeTheme} currentMode={currentMode}/>
      </div>

      <Routes>
        <Route path="/" element={<Home currentMode={currentMode} />} />
        <Route path="/cart" element={<Cart currentMode={currentMode} />} />
      </Routes>  
    </div>);
};

export default App;
