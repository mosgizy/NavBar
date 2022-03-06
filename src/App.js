import logo from './logo.svg';
import './App.css';
import NavItems from './NavItems';
import SocialIcons from './SocialIcons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react'

function App() {
  const [show,setShow] = useState(false)

  const toggle = () => {
    setShow(!show)
  }

  return (
    <div className="">
      <header className=' bg-white w-full shadow-lg md:flex md:justify-center'>
        <nav className="py-3.5 px-4 overflow-hidden md:flex md:justify-between md:items-center lg:max-w-6xl lg:px-0 w-full">
          <div className='flex justify-between items-center'>
            <img src={logo} className="h-10" alt="logo" />
            <div onClick={toggle}>
              <FontAwesomeIcon className='text-2xl text-green-800 md:hidden' icon={faBars} />
            </div>
          </div>
          <NavItems showItems={show}/>
          <SocialIcons />
        </nav>
      </header>
    </div>
  );
}

export default App;
