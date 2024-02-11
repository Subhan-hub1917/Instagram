
import Search from './Menu_parts/Search';
import Submenu from './Menu_parts/Submenu';
import Notifications from './Menu_parts/Notifications';
import { useContext } from 'react';
import { MyContext } from '../../MyContext';
import { Link } from 'react-router-dom';
const Menu = () => {
    const {isMessenger,handleHome,handleMessenger,theme,showPopover}=useContext(MyContext);

   
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
                    <div className={`d-lg-flex m-1 mt-2 btn ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} ${theme === true ? 'btn-dark' : 'btn-light' } `}>
                        <i className="h5 bi bi-house-door"></i>
                        <p className={`d-none h5 ms-1   ${isMessenger===true ? '': 'd-lg-block'}`}>Home</p>
                    </div>
                </Link>
                
                    {/* ////////////////////////////////////////////// */}
                            <Search/>
                    {/* ////////////////////////////////////////////// */}
                
                    <div className={`d-lg-flex m-1 mt-2 btn ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} ${theme === true ? 'btn-dark' : 'btn-light' } `}>
                        <i className="h5 bi bi-compass"></i>
                        <p className={`d-none  h5 ms-2  ${isMessenger===true ? '': 'd-lg-block'} `}>Explore</p>
                    </div>

                    <div className={`d-lg-flex m-1 mt-2 btn ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} ${theme === true ? 'btn-dark' : 'btn-light' } `}>
                        <i className="h5 bi bi-collection-play"></i>
                        <p className={`d-none  h5 ms-2  ${isMessenger===true ? '': 'd-lg-block'} `}>Reels</p>
                    </div>
                
                    <Link to="/Messenger" className='text-decoration-none'>
                        <div className={`d-lg-flex m-1 mt-2 btn ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} ${theme === true ? 'btn-dark' : 'btn-light' } `}  onClick={handleMessenger}>
                            <i className="h5 bi bi-chat-dots"></i>
                            <p className={`d-none h5 ms-2   ${isMessenger===true ? '': 'd-lg-block'}`} >Messages</p>
                        </div>
                    </Link>
                
                    {/* ////////////////////////////////////////////// */}
                        <Notifications/>
                    {/* ////////////////////////////////////////////// */}

                    <div className={`d-lg-flex m-1 mt-2 btn  ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} ${theme === true ? 'btn-dark' : 'btn-light' } `}>
                        <i className="h5 bi bi-plus-square"></i>
                        <p className={`d-none h5 ms-2   ${isMessenger===true ? '': 'd-lg-block'}`}>Create</p>
                    </div>
               
                    <Link to="/Profile" className='text-decoration-none'> 
                        <div className={`d-lg-flex m-1 mt-2 btn  ${isMessenger===true ? 'justify-content-center': 'justify-content-start'} ${theme === true ? 'btn-dark' : 'btn-light' } `}>
                            <i className="h5 bi bi-person"></i>
                            <p className={`d-none h5 ms-2   ${isMessenger===true ? '': 'd-lg-block'}`}>Profie</p>
                        </div>
                    </Link>
                    {/* ////////////////////////////////////////////////// */}
                     <Submenu/>
                    {/* ////////////////////////////////////////////////////// */}
                
                </div>            

     );
}
 
export default Menu;