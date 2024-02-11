import {  useContext, useRef  } from "react";
import { MyContext } from "../../../MyContext";
import { Popover } from 'react-bootstrap';

const Post_related = () => {
    const {showPopover,setShowPopover,toggler,theme} = useContext(MyContext) 
    const popoverRef = useRef(null);
  
    const handleToggle = () => {
      setShowPopover(!showPopover);
    };
    
    const handleClose = () => {
    setShowPopover(false);
    };
    
    return (  
    <>
      <div className="me-md-5">
      <button type="button" className={`btn ${theme === true ? 'btn-dark' : 'btn-light' } `} onClick={()=>toggler(setShowPopover)}>
        <i className="bi bi-three-dots"></i>
      </button>

      <Popover ref={popoverRef}
          show={showPopover}          
          onHide={handleClose}
          className={`position-fixed top-50 start-50 translate-middle width-100vh height-80vh ${theme?'bg-dark':'bg-light'}`}>
        
        <Popover.Body>
                    <div className={`d-flex justify-content-center border-bottom border-1 btn btn-rounded ${theme?'btn-dark':'btn-light'}`}>
                        <p className="h6 fw-bold text-danger">Report</p>
                    </div>
                    <div className={`d-flex justify-content-center border-bottom border-1 btn btn-rounded ${theme?'btn-dark':'btn-light'}`}>
                        <p className="h6 fw-bold text-danger">Unfollow</p>
                    </div>
                    <div className={`d-flex justify-content-center border-bottom border-1 btn btn-rounded ${theme?'btn-dark':'btn-light'}`}>
                        <p className="h6 fw-bold">Add to Favourite</p>
                    </div>
                    <div className={`d-flex justify-content-center border-bottom border-1 btn btn-rounded ${theme?'btn-dark':'btn-light'}`}>
                        <p className="h6 fw-bold">Go to Post</p>
                    </div>
                    <div className={`d-flex justify-content-center border-bottom border-1 btn btn-rounded ${theme?'btn-dark':'btn-light'}`}>
                        <p className="h6 fw-bold">Share to..</p>
                    </div>
                    <div className={`d-flex justify-content-center border-bottom border-1 btn btn-rounded ${theme?'btn-dark':'btn-light'}`}>
                        <p className="h6 fw-bold">Copy Link</p>
                    </div>
                    <div className={`d-flex justify-content-center border-bottom border-1 btn btn-rounded ${theme?'btn-dark':'btn-light'}`}>
                        <p className="h6 fw-bold">Embed</p>
                    </div>        
                    <div className={`d-flex justify-content-center border-bottom border-1 btn btn-rounded ${theme?'btn-dark':'btn-light'}`}>
                        <p className="h6 fw-bold">About this Account</p>
                    </div> 
                    <div className={`d-flex justify-content-center border text-danger border-2 btn btn-ronded ${theme?'btn-dark':'btn-light'}`} onClick={handleToggle}>
                        <p className="h6 fw-bold">Cancel</p>
                    </div>
        </Popover.Body>
      </Popover>
    </div>

</>
     );
}
 
export default Post_related;