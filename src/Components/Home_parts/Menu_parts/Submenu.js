import React, { useRef, useContext } from 'react';
import { MyContext } from '../../../MyContext';
import Swicth_Appearance from './More/Switch_Apperance';
const Submenu = () => {
    const {isOpenMore,setIsOpenMore,isMessenger,toggler,theme,clearStates}=useContext(MyContext);
    const sidebarRef = useRef(null);
    
      

  return (
    <>
     
    <div className={`d-lg-flex m-1 mt-2 btn 
        ${isMessenger ? 'justify-content-center': 'justify-content-start'} 
        ${theme ? 'btn-dark' : 'btn-light' } `}  id="sidebar-toggle"  
        onClick={()=>{toggler(setIsOpenMore)}}>
            <i className={`h5 bi ${ isOpenMore ? 'bi-list' : 'bi-list' } ${theme ? 'text-light' : 'text-dark' }`}></i>
            <p className={`d-none h5 ms-2 ${isMessenger ? '': 'd-lg-block'} ${ isOpenMore ? 'fw-bolder' : ''} `}>More</p>
    </div>
    
    <div ref={sidebarRef} className={`More mt-5 border-5 border-rounded height-80vh  ${isOpenMore ? 'open' : ''}`}>   
      <div className={`More-content bg-light ${theme ? 'bg-dark' : 'bg-light' }`}>
           <div className=''>
                 <div className="col-12 mt-5 d-flex flex-column justify-content-center px-1 ">
                    <div  className='border-3 border-bottom'>             
                        <div className={`d-flex m-2  mt-2 align-items-center btn btn-rounded ${theme ? 'btn-dark' : 'btn-light' }`}>
                            <i className="h6 bi bi-gear"></i>
                            <p className="h6 ms-2 fw-bold">Setting</p>
                        </div>
                        <div className={`d-flex m-2  mt-2 align-items-center btn btn-rounded ${theme ? 'btn-dark' : 'btn-light' }`}>
                            <i className="h5 bi bi-activity"></i>
                            <p className="h6 ms-2 fw-bold">Activity</p>
                        </div>
                        <div className={`d-flex m-2  mt-2 align-items-center btn btn-rounded ${theme ? 'btn-dark' : 'btn-light' }`}>
                            <i className="h6 bi bi-bookmark"></i>
                            <p className="h6 ms-2 fw-bold">Saved</p>
                        </div>
                        {/* //////////////////////////////////////////////// */}
                            
                        {/* <div className={`d-flex m-2  mt-2 align-items-center btn btn-rounded ${theme === true ? 'btn-dark' : 'btn-light' }`}> */}
                            {/* <i className="h6 bi bi-brightness-high"></i>
                            <p className="h6 ms-2 fw-bold">Switch Apperance</p> */}
                            <Swicth_Appearance/>
                        {/* </div> */}

                        {/* //////////////////////////////////////////////// */}
                        <div className={`d-flex m-2  mt-2 align-items-center btn btn-rounded ${theme ? 'btn-dark' : 'btn-light' }`}>
                            <i className="h6 bi bi-exclamation-triangle"></i>
                            <p className="h6 ms-2 fw-bold">Report a problem</p>
                        </div>
                    </div>
                    <div className='border-3 border-bottom'>
                        <div className={`d-flex m-2  mt-2 align-items-center btn btn-rounded ${theme ? 'btn-dark' : 'btn-light' }`}>
                            <i className="h6 bi bi-threads"></i>
                            <p className="h6 ms-2 fw-bold">Thread</p>
                        </div>
                    </div> 
                    {/* <div className='border-3 border-bottom'>
                        <div className={`d-flex m-2  mt-2 align-items-center btn btn-rounded ${theme === true ? 'btn-dark' : 'btn-light' }`}> */}
                            {/* <i className="h6 bi bi-warning"></i>
                            <p className="h6 ms-2 fw-bold">Swictch Accounts</p> */}
                            {/* <Swicth_Appearance/> */}
                        {/* </div>
                    </div>  */}
                    <div className='border-3 border-bottom'>
                        <div className={`d-flex m-2  mt-2 align-items-center btn btn-rounded ${theme ? 'btn-dark' : 'btn-light' }`}>
                            <i className="h6 bi bi-warning"></i>
                            <p className="h6 ms-2 fw-bold">Logout</p>
                        </div>
                    </div>            
                            </div>
              
           </div>

      </div>
    </div>
  </>

    
   );
}
 
export default Submenu;