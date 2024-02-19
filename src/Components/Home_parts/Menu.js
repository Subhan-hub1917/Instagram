
import Search from './Menu_parts/Search';
import Submenu from './Menu_parts/Submenu';
import Notifications from './Menu_parts/Notifications';
import { useContext } from 'react';
import { MyContext } from '../../MyContext';
import { Link } from 'react-router-dom';
const Menu = () => {
    const {
            isMessenger,handleMessenger,
            handleHome,
            theme,
            home,setHome,
            setReels,reels,
            setExplore,explore
            ,create,setCreate,
            isOpenProfile,setIsOpenProfile, 
            showPopover,clearStates 
        }=useContext(MyContext);

   
    <link rel="stylesheet" href="https://fonts.google.com/specimen/Lobster?query=lobster&sort=popularity" />

    return ( 

                <div className={` d-none d-md-block col-md-1 p-3 sticky-top d-flex flex-column height-100vh border-3 border-end 
                ${isMessenger===true ? 'col-lg-1': 'col-lg-2  '}  
                ${theme === true ? 'text-light bg-dark' : 'text-dark bg-light' } `}>
                    
                    <div className={`d-lg-flex m-1 mt-4 btn ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} ${theme === true ? 'btn-dark' : 'btn-light' } `}>
                        <i className={`d-block h5 bi bi-instagram ${isMessenger===true ? 'd-block': 'd-lg-none'}`}></i>
                        <h3  className={`d-none h2 ms-0 fw-bold ${isMessenger===true ? '': 'd-lg-block'}` } style={{ fontFamily: 'Pacifico, cursive' , fontWeight: 900 }}>Instagram</h3>
                    </div>
                
                <Link to="/" className='text-decoration-none' onClick={handleHome}>
                    <div className={`d-lg-flex m-1 mt-2 btn 
                        ${isMessenger===true ? 'justify-content-center': 'justify-content-start'}
                        ${theme === true ? 'btn-dark' : 'btn-light' } `}
                        onClick={()=>{clearStates();setHome(true);}}
                        >
                            <i className={`h5 bi ${ home ? 'bi-house-door-fill' : 'bi-house-door ' } ${theme ? 'text-light' : 'text-dark' }`}></i>
                            <p className={`d-none h5 ms-1   ${isMessenger===true ? '': 'd-lg-block'} ${ home ? 'fw-bolder' : '' }`}>Home</p>
                    </div>
                </Link>
                
                    {/* ////////////////////////////////////////////// */}
                            <Search/>
                    {/* ////////////////////////////////////////////// */}
                
                    <div className={`d-lg-flex m-1 mt-2 btn 
                        ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} 
                        ${theme === true ? 'btn-dark' : 'btn-light' } `}
                        onClick={()=>{clearStates();setExplore(true)}}>
                            <i className={`h5 bi ${ explore ? 'bi-compass-fill' : 'bi-compass ' } ${theme ? 'text-light' : 'text-dark' }`}></i>
                            <p className={`d-none  h5 ms-2  ${isMessenger===true ? '': 'd-lg-block'} ${ explore ? 'fw-bold' : '' } ${ explore ? 'fw-bolder' : '' }`}>Explore</p>
                    </div>

                <Link to="/Reels" className='text-decoration-none'>
                    <div className={`d-lg-flex m-1 mt-2 btn 
                        ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} 
                        ${theme === true ? 'btn-dark' : 'btn-light' } `}
                        onClick={()=>{clearStates();setReels(true)}}>
                            <i className={`h5 bi ${ reels ? 'bi-collection-play-fill' : 'bi-collection-play ' } ${theme ? 'text-light' : 'text-dark' }`}></i>
                            <p className={`d-none  h5 ms-2  ${isMessenger===true ? '': 'd-lg-block'} ${ reels ? 'fw-bold' : '' } ${ reels ? 'fw-bolder' : '' }`}>Reels</p>
                    </div>
                </Link>
                
                    <Link to="/Messenger" className='text-decoration-none'>
                        <div className={`d-lg-flex m-1 mt-2 btn ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} ${theme === true ? 'btn-dark' : 'btn-light' } `}  onClick={()=>{clearStates();handleMessenger()}}>
                            <i className={`h5 bi ${ isMessenger ? 'bi-chat-dots-fill' : 'bi-chat ' } ${theme ? 'text-light' : 'text-dark' }`}></i>
                            <p className={`d-none h5 ms-2   ${isMessenger===true ? '': 'd-lg-block'} ${ isMessenger ? 'fw-bolder' : '' } `}>Messages</p>
                        </div>
                    </Link>
                
                    {/* ////////////////////////////////////////////// */}
                        <Notifications/>
                    {/* ////////////////////////////////////////////// */}

                    <div className={`d-lg-flex m-1 mt-2 btn  
                        ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} 
                        ${theme === true ? 'btn-dark' : 'btn-light' } `}
                        onClick={()=>{clearStates();setCreate(true)}}>
                            <i className={`h5 bi ${ create ? 'bi-plus-square-fill' : 'bi-plus-square' } ${theme ? 'text-light' : 'text-dark' }`}></i>
                            <p className={`d-none h5 ms-2   ${isMessenger===true ? '': 'd-lg-block'}  ${ create ? 'fw-bolder' : '' } `}>Create</p>
                    </div>
               
                    <Link to="/Profile" className='text-decoration-none'> 
                        <div className={`d-lg-flex m-1 mt-2 btn        
                            ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} 
                            ${theme === true ? 'btn-dark' : 'btn-light' } `}
                            onClick={()=>{clearStates();setIsOpenProfile(true)}}>
                                <i className={`h5 bi ${ isOpenProfile ? 'bi-person-fill' : 'bi-person' } ${theme ? 'text-light' : 'text-dark' }`}></i>
                                <p className={`d-none h5 ms-2   ${isMessenger===true ? '': 'd-lg-block'} ${ isOpenProfile ? 'fw-bolder' : '' }`}>Profie</p>
                        </div>
                    </Link>
                    {/* ////////////////////////////////////////////////// */}
                     <Submenu/>
                    {/* ////////////////////////////////////////////////////// */}
                
                </div>            

     );
}
 
export default Menu;