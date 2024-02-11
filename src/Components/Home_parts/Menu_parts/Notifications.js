import React, { useContext } from 'react';
import { MyContext } from '../../../MyContext';
const Notifications = () => {
    const {
        isOpenNotifications,setIsOpenNotifications,
        setIsOpenSearch,setIsOpenMore,
        isMessenger,theme,
        toggler,toggleSidebar
        }=useContext(MyContext);

  return (
    <>
    <div className={`d-lg-flex m-1 mt-2 btn ${isMessenger ? 'justify-content-center': 'justify-content-start'}  
    ${theme === true ? 'btn-dark' : 'btn-light' } `} id="sidebar-toggle " onClick={()=>toggler(setIsOpenNotifications)}>
            <i className="h5 bi bi-suit-heart"></i>
            <p className={`d-none h5 ms-2 ${isMessenger ? '': 'd-lg-block'}`}>Notifications</p>
    </div>

    <div className={`sidebar ${isOpenNotifications ? 'open' : ''} 
    ${theme ? 'bg-dark text-light': 'bg-light text-dark '}`}>
      <div className=' text-end  '>
        <button id="sidebar-cancel " className={`outline-none m-1 ${theme === true ? 'bg-dark text-light': 'bg-light text-dark'}`} onClick={()=>toggler(setIsOpenNotifications)}>
          <i className='bi bi-x h3'></i>
        </button>
      </div>
       
      <div className="sidebar-content ">
           <div>
                 <div className="col-12 d-flex flex-column height-100vh ">
                            <div className="row">
                             <div className="col-2 d-none d-md-block d-flex flex-column height-100vh">
                                <div className={`mt-1 btn btn-rounded ${theme ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-instagram"></i>
                                 </div>
                                 <div className={`mt-3 btn btn-rounded  ${theme ? 'btn-dark': 'btn-light'}`} onClick={()=>toggler(setIsOpenNotifications)}>
                                     <i className="h5 bi bi-house-door"></i>
                                 </div>
                                 <div className={`mt-3 btn btn-rounded  ${theme ? 'btn-dark': 'btn-light'}`} onClick={()=>toggleSidebar(setIsOpenNotifications,setIsOpenSearch)}>
                                     <i className="h5 bi bi-search"></i>
                                 </div>
                                 <div className={`mt-3  btn btn-light btn-rounded  ${theme ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-compass"></i>
                                 </div>
                                 <div className={`mt-3 btn btn-rounded  ${theme ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-collection-play"></i>
                                 </div>
                                 <div className={`mt-3  btn btn-rounded  ${theme ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-chat-dots"></i>
                                 </div>
                                 <div className={`mt-3  btn btn-rounded  ${theme ? 'btn-dark': 'btn-light'}`}  onClick={()=>toggler(setIsOpenNotifications)}>
                                     <i className="h5 bi bi-suit-heart"></i>
                                 </div>
                                 <div className={`mt-3 btn btn-rounded  ${theme ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-plus-square"></i>
                                 </div>
                                 <div className={`mt-3 btn btn-rounded  ${theme ? 'btn-dark': 'btn-light'}`}>
                                     <i className="h5 bi bi-person"></i>
                                 </div>
                                 <div className={`mt-3 btn btn-rounded  ${theme ? 'btn-dark': 'btn-light'} `} onClick={()=>toggleSidebar(setIsOpenNotifications,setIsOpenMore)}>
                                     <i className="h5 bi bi-list"></i>
                                 </div>

                             </div>
                             <div className="col-10 d-flex flex-column height-100vh overflow-auto custom-scrollbar ">
                                 <h2 className='mt-3 mb-4 text-center '>Notifications</h2>
                                {/* ************************************************************* */}
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                <div className='row'>
                                        <div className='col-2'>
                                            <i className='h2 bi bi-person-fill'></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <p>This is the description of the Notification</p>
                                        </div>
                                        <div className='col-2'>
                                            <div className='btn btn-primary'>Follow</div>
                                        </div>
                                    </div>
                                {/* ************************************************************ */}
                                 </div>
                       </div>            
                            </div>
              
           </div>

      </div>
    </div>
  </>

    
   );
}
 
export default Notifications;