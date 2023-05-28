import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import logo from "../logo.png"
import { MdSunny } from "react-icons/md";
import {MdOutlineDarkMode} from 'react-icons/md'

const Navbar = ({handleChangeTheme, currentMode}) => {
  const {cart} = useSelector((state) => state)


  return ( 
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/"> 
          <div className="ml-5">
            <img src="../logo1.png" alt="WebLogo" className="h-14 bg-slate-900"/>
          </div>
        </NavLink>
        <div className="flex items-center justify-center font-medium text-slate-100 gap-x-4">
          <NavLink to="/">
          <p>Home</p> 
          </NavLink>

          <NavLink to="/cart">
            <div className="relative px-4 py-5">
            <FaShoppingCart className="text-2xl"/>
            {
              cart.length > 0 &&
            <sapn className="absolute top-4 right-1 bg-green-600
               text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</sapn>
            }
            </div>
          </NavLink>

          <div className='rounded-full flex justify-center items-center'>
          {  
            currentMode === "dark" &&
            (<button onClick={handleChangeTheme} >
              <MdSunny className='icon'/>
            </button>)
          }

          {
            currentMode === "light" &&
            (<button onClick={handleChangeTheme} >
              <MdOutlineDarkMode className='icon'/> 
            </button>)
          }

        </div>
        </div>
      </nav>    
    </div>
  );
};

export default Navbar;
