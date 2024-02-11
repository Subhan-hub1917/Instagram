import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../../MyContext';
const Swicth_Appearance = () => {
  const {
        appearance, setAppearance,
        theme, setTheme,
        setIsOpenMore,
        toggler,toggleSidebar,
        }=useContext(MyContext);

  return (
    <>
    <div className={`d-flex m-2  mt-2 align-items-center btn " id="sidebar-toggle ${theme === true ? 'btn-dark' : 'btn-light' } `}  onClick={()=>{toggler(setAppearance);toggler(setIsOpenMore)}}>
            <i className="h6 bi bi-brightness-high"></i>
            <p className="h6 ms-2 fw-bold">Switch Apperance</p>
    </div>

    <div className={`Appearance border border-dark  mt-5 ${appearance ? 'open' : ''} ${theme === true ? 'bg-dark' : 'bg-light' } `}>
      <div className="Appearance-content ">
           <div>
                <div className={`btn ${theme === true ? 'btn-dark' : 'btn-light' }`}  onClick={()=>toggler(setAppearance)}>
                  <div id="Appearance-cancel " className='d-flex m-2'>
                    <i className='h5 bi bi-box-arrow-left'></i>
                  </div>
                </div>

                <div className="col-12 d-flex flex-column height-100vh m-2">
                     <div className='row m-2 my-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className={`h6 ${theme === true ? 'text-light' : 'text-dark' }`}>Change Mode</p>
                            <div className="form-check form-switch">
                                < div className={`h3 btn ${ theme===true ? ' btn-light': ' btn-dark'}`}  onClick={()=>toggler(setTheme)} >{` ${ theme===true ? 'Light': 'Dark'} `}</div>
                            </div>
                     </div>
                </div>
            </div>
        </div>
        </div>
      </div>
  </>
   );
}
 
export default Swicth_Appearance;