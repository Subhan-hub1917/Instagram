import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Loading from './Components/Loading';
import Home from './Components/Home';
import { MyContext } from './MyContext';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messenger from './Components/Home_parts/Menu_parts/Messenger';
import UserProfile from './UserProfile';
import Navbar  from './Components/Home_parts/Navbar';
import Footer from './Components/Footer';

function App() {
  
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [openChat, setOpenChat]=useState(false);
  const [showPopover, setShowPopover] = useState(true);
  const [appearance, setAppearance] = useState(false);
  
  // Retrieve the initial state from localStorage, if available, or default to false
  const [isMessenger, setIsMessenger] = useState(() => {
    const storedValue = localStorage.getItem('isMessenger');
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });
  const [theme, setTheme] = useState(() => {
    const storedValue = localStorage.getItem('theme');
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  // Update localStorage whenever isMessenger changes
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    localStorage.setItem('isMessenger', JSON.stringify(isMessenger));
  }, [theme,isMessenger]);

  const handleMessenger=()=>{
      setIsMessenger(true)
  }
  const handleHome=()=>{
      setIsMessenger(false)
  }
  const handleChat=()=>{
    console.log(openChat)
    setOpenChat(true);
}
  const handleCloseChat=()=>{
    console.log(openChat)
    setOpenChat(false);
  }
  const toggler = (setState) => {
    setState((prev) => !prev);
  };
  const toggleSidebar = (setCurrent,setIncoming) => {
    setCurrent((prev) => !prev);
    setIncoming((prev) => !prev);
  };
  return (
    <MyContext.Provider 
      value={{
        /////////////////    useStates    /////////////////////
          isOpenMore,setIsOpenMore,
          isOpenNotifications,setIsOpenNotifications,
          isOpenSearch,setIsOpenSearch,
          showPopover, setShowPopover,
          isOpenProfile, setIsOpenProfile,
          isMessenger, setIsMessenger,
          openChat, setOpenChat,
          appearance, setAppearance,
          theme,setTheme,
        ////////////////      Functions   /////////////////////
        toggler,toggleSidebar,handleHome,handleMessenger,handleChat,handleCloseChat
        }}>
          
        <BrowserRouter>
            <Navbar/>
      <div className="App">
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/Login' Component={Login}/>
            <Route exact path='/Loading' Component={Loading}/>
            <Route exact path='/Messenger' Component={Messenger}/>
            <Route exact path='/Profile' Component={UserProfile}/>        
          </Routes>
      </div>
        <Footer/>
        </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
