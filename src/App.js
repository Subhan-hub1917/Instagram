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
import Story from './Components/Home_parts/Main_parts/Story';
import ReelsPage from './ReelsPage';
import Reels from './Components/Home_parts/Menu_parts/Reels';

function App() {
  
  const [home, setHome] = useState(true);
  const [reels, setReels] = useState(false);
  const [explore, setExplore] = useState(false);
  const [create, setCreate] = useState(false);
  const [story, setStory] = useState(false);
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [openChat, setOpenChat]=useState(false);
  const [showPopover, setShowPopover] = useState(true);
  const [appearance, setAppearance] = useState(false);

  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(true);
  
  
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
  }, [theme,isMessenger,setReels]);

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
  const clearStates = () => {
    setHome(false);
    setReels(false);
    setCreate(false);
    setExplore(false);
    setIsOpenProfile(false);
    setIsOpenMore(false);
    setIsOpenSearch(false);
    setIsMessenger(false)
  };
setTimeout(() => {
  setLoading(false)
}, 4000);

  return (
    <MyContext.Provider 
      value={{
        /////////////////    useStates    /////////////////////
          home, setHome,
          isOpenSearch,setIsOpenSearch,
          reels, setReels,
          explore,setExplore,
          isOpenNotifications,setIsOpenNotifications,
          isMessenger, setIsMessenger,
          create, setCreate,
          isOpenProfile, setIsOpenProfile,
          isOpenMore,setIsOpenMore,
          story, setStory,
          Login,setLogin,
          
          theme,setTheme,
          showPopover, setShowPopover,
          openChat, setOpenChat,
          appearance, setAppearance,
        ////////////////      Functions   /////////////////////
        toggler,toggleSidebar,handleHome,handleMessenger,handleChat,handleCloseChat,clearStates
        }}>
          
        <BrowserRouter>
        
        {
        loading 
        ? 
          <Loading/>
        :
          <>  
        { (login===true && loading ===false ) 
        ? 
          <Login/>   
        :      
        < >

      <div className="App">
            <Navbar/>
              <Routes>
                <Route exact path='/' Component={Home}/>
                {/* <Route exact path='/Login' Component={Login}/> */}
                <Route exact path='/Loading' Component={Loading}/>
                <Route exact path='/Messenger' Component={Messenger}/>
                <Route exact path='/Profile' Component={UserProfile}/> 
                <Route exact path='/Story' Component={Story}/>
                <Route exact path='/Reels' Component={ReelsPage}/>
            </Routes>
          <Footer/>
      </div>
      </>
      }
      </>
      }
        </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;