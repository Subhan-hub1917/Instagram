import React, { useContext, useState } from 'react';
import { MyContext } from '../../../MyContext';
import { Link } from 'react-router-dom';
const Search = () => {
  const {
        isOpenSearch,setIsOpenSearch,setHome,
        setExplore,setReels,
        setIsOpenNotifications,setIsOpenMore,
        toggler,toggleSidebar,handleMessenger,
        isOpenProfile, setIsOpenProfile,
        isMessenger,theme,clearStates
        }=useContext(MyContext);

  return (
    <>
    <div className={`d-lg-flex m-1 mt-2 btn popup
    ${isMessenger==true ? 'justify-content-center': 'justify-content-start'} 
    ${theme === true ? 'btn-dark' : 'btn-light' } `} id="sidebar-toggle "  
    onClick={()=>{toggler(setIsOpenSearch)}}>
            <i className={`h5 bi ${ isOpenSearch ? 'bi-search-heart-fill' : 'bi-search' } ${theme ? 'text-light' : 'text-dark' }`}></i>
            <p className={`d-none h5 ms-2 ${isMessenger==true ? '': 'd-lg-block'}`}>Search</p>
    </div>

    <div className={`sidebar ${isOpenSearch ? 'open' : ''}  ${theme === true ? 'bg-dark text-light': 'bg-light text-dark '}`}>
      <div className=' text-end  '>
        <button id="sidebar-cancel " className={`outline-none m-1 border-0 ${ theme === true ? 'bg-dark text-light': 'bg-light text-dark'}`} onClick={()=>toggler(setIsOpenSearch)}>
          <i className='bi bi-x h3'></i>
        </button>
      </div>
       
      <div className="sidebar-content ">
           <div>
                 <div className='col-12 d-flex flex-column height-100vh popup'>
                            <div className="row ">
                             <div className="col-2 p-0 d-flex flex-column height-100vh ">
                                <div className={`mt-1 btn btn-rounded  
                                    ${theme === true ? 'btn-dark': 'btn-light'}`}>
                                         <i className="h5 bi bi-instagram"></i>
                                 </div>
                            <Link to="/" className='text-decoration-none text-center' >
                                 <div className={`mt-3 btn btn-rounded 
                                    ${theme === true ? 'btn-dark': 'btn-light'}`}
                                    onClick={()=>{toggler(setIsOpenSearch);setHome(true)}}>
                                        <i className="h5 bi bi-house-door"></i>
                                 </div>
                           </Link>

                                 <div className={`mt-3 btn btn-rounded  
                                    ${theme === true ? 'btn-dark': 'btn-light'}`} 
                                    onClick={()=>{toggler(setIsOpenSearch);}}>
                                         <i className={`h5 bi ${ isOpenSearch ? 'bi-search-heart-fill' : 'bi-search' } ${theme ? 'text-light' : 'text-dark' }`}></i>
                                 </div>

                                 <div className={`mt-3 btn btn-rounded  
                                    ${theme === true ? 'btn-dark': 'btn-light'}`}
                                    onClick={()=>{clearStates();setExplore(true)}}>
                                         <i className="h5 bi bi-compass"></i>
                                 </div>
                                 <div className={`mt-3  btn btn-rounded  
                                    ${theme === true ? 'btn-dark': 'btn-light'}`}
                                    onClick={()=>{clearStates();setReels(true)}}>
                                        <i className="h5 bi bi-collection-play"></i>
                                 </div>
                            
                            <Link to="/Messenger" className='text-decoration-none text-center' 
                                onClick={()=>{clearStates();handleMessenger();} } >
                                    <div className={`mt-3  btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`} >
                                        <i className={`h5 bi ${ isMessenger ? 'bi-chat-dots-fill' : 'bi-chat-dots' } ${theme ? 'text-light' : 'text-dark' }`}></i>
                                    </div>
                            </Link>

                                 <div className={`mt-3 btn btn-rounded  
                                    ${theme === true ? 'btn-dark': 'btn-light'}`} 
                                    onClick={()=>toggleSidebar(setIsOpenSearch,setIsOpenNotifications)}>
                                        <i className="h5 bi bi-suit-heart"></i>
                                 </div>
                                 <div className={`mt-3  btn btn-rounded 
                                    ${theme === true ? 'btn-dark': 'btn-light'}`}>
                                        <i className="h5 bi bi-plus-square"></i>
                                 </div>
    
                            <Link to="/Profile" className='text-decoration-none text-center' 
                                onClick={()=>{clearStates();toggler(setIsOpenProfile) }} >
                                    <div className={`mt-3  btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`}>
                                        <i className="h5 bi bi-person"></i>
                                    </div>
                            </Link>    
                            
                                 <div className={`mt-3  btn btn-rounded  
                                    ${theme === true ? 'btn-dark': 'btn-light'}`}  
                                    onClick={()=>{toggler(setIsOpenSearch);setIsOpenMore(true)}}>
                                        <i className="h5 bi bi-list"></i>
                                 </div>

                             </div>
                             <div className="col-10 px-3 d-flex flex-column height-100vh ">
                                 <h2 className='mt-3'>Search</h2>
                                 <input type="search" className="mt-4 rounded focus-none" />
                             </div>
                       </div>            
                            </div>
              
           </div>

      </div>
    </div>
  </>

    
   );
}
 
export default Search;