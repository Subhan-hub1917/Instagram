import React, { useContext, useState } from 'react';
import { MyContext } from '../../../MyContext';
import { Link } from 'react-router-dom';
const Search = () => {
  const {
        isOpenSearch,setIsOpenSearch,
        setIsOpenNotifications,setIsOpenMore,
        toggler,toggleSidebar,handleMessenger,
        isMessenger,theme
        }=useContext(MyContext);

  return (
    <>
    <div className={`d-lg-flex m-1 mt-2 btn ${isMessenger==true ? 'justify-content-center': 'justify-content-start'} ${theme === true ? 'btn-dark' : 'btn-light' } `} id="sidebar-toggle "  onClick={()=>toggler(setIsOpenSearch)}>
            <i className="h5 bi bi-search"></i>
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
                 <div className="col-12 d-flex flex-column height-100vh">
                            <div className="row ">
                             <div className="col-2 p-0 d-flex flex-column height-100vh ">
                                <div className={`mt-1 btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-instagram"></i>
                                 </div>
                            <Link to="/" className='text-decoration-none text-center' >
                                 <div className={`mt-3 btn btn-rounded ${theme === true ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-house-door"></i>
                                 </div>
                           </Link>

                                 <div className={`mt-3 btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`} onClick={()=>toggler(setIsOpenSearch)}>
                                     <i className="h5 bi bi-search"></i>
                                 </div>
                                 <div className={`mt-3 btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-compass"></i>
                                 </div>
                                 <div className={`mt-3  btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-collection-play"></i>
                                 </div>
                            
                            <Link to="/Messenger" className='text-decoration-none text-center' onClick={()=>{handleMessenger();toggler(setIsOpenSearch)} } >
                                 <div className={`mt-3  btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`} >
                                     <i className="h5 bi bi-chat-dots"></i>
                                 </div>
                            </Link>

                                 <div className={`mt-3 btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`} onClick={()=>toggleSidebar(setIsOpenSearch,setIsOpenNotifications)}>
                                     <i className="h5 bi bi-suit-heart"></i>
                                 </div>
                                 <div className={`mt-3  btn btn-rounded ${theme === true ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-plus-square"></i>
                                 </div>
    
                            <Link to="/Profile" className='text-decoration-none text-center' onClick={()=>toggler(setIsOpenSearch) } >
                                 <div className={`mt-3  btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-person"></i>
                                 </div>
                            </Link>    
                            
                                 <div className={`mt-3  btn btn-rounded  ${theme === true ? 'btn-dark': 'btn-light'}`}  onClick={()=>toggleSidebar(setIsOpenSearch,setIsOpenMore)}>
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