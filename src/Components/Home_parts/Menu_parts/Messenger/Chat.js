import { useContext } from "react";
import { MyContext } from "../../../../MyContext";

const Chat = () => {
    const {isMessenger,openChat,setOpenChat,handleCloseChat,theme}=useContext(MyContext);
    
    return ( 
        <div className={`height-80vh height-md-100vh ${isMessenger===true ? 'col-12 col-md-7 col-lg-8':'col-12 col-md-7 col-lg-7'} ${openChat===true ? 'd-block':' d-none'} `} >
            
            <div className={`row p-2 border-lg border-bottom align-items-center sticky-top height-10vh ${theme ? 'text-light bg-primary ':'text-light bg-primary'}`}>
                <div className="col-8 d-flex align-items-center ">
                    <i className="h5 ms-2 bi bi-box-arrow-left"onClick={()=>handleCloseChat()}></i>
                    <i className="h3 ms-2 bi bi-person-circle"></i>
                    <div className="h4 ms-2">Subhan Qamar</div>
                </div>
                <div className="col-4 text-end text-light">
                    <i className="me-2 h5 bi bi-telephone-fill"></i>
                    <i className="me-2 h5 bi bi-camera-video-fill"></i>
                    <i className="me-2 h5 bi bi-info-circle-fill"></i>
                </div>
            </div>
            
            <div className="container-fluid  height-90vh">
                <div className="row m-1 overflow-auto">
                    {/* /////////////////////////////////////////////////////////////////////////// */}
                    {/* ***************************   Sender  *************************************** */}
                    <div className="d-flex align-items-center">
                        <i className=" h4 bi bi-person-circle"></i>
                        <div className="mx-2 my-1 bg-secondary text-light border rounded-top rounded-end text-start p-2">
                            Hi ! How is it going ?
                        </div> 
                    </div>
                    {/* ***************************   Reciever  *************************************** */}
                    <div className="d-flex align-items-center flex-row-reverse">
                        <i className=" h4 bi bi-person-circle"></i>
                        <div className="mx-2 my-1 bg-secondary text-light border rounded-top rounded-start p-2">
                            Hello! What'up ? ......
                        </div>
                    </div>
                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                </div>
            </div>
            
            <div className={`row border-top border-dark align-items-center p-2 sticky-bottom height-10vh ${theme ? 'bg-dark text-light ':'bg-light text-dark'}`}>
                <div className="col-1 text-center">
                    <i className="text-warning h5 bi bi-emoji-smile-fill"></i>
                </div>
                <div className="col-9">
                    <div className="input-group d-flex border border-dark align-items-center ">
                        <div className={`input-group-text ${theme ? 'bg-dark ':'bg-light'}`}>
                            <label className="form-label">
                                <i className={`bi bi-envelope ${theme ? 'text-light outline-none ':' text-dark'}`}></i>
                            </label>
                        </div>
                        <input type="text"  className="outline-noneno-focus form-control width-100vh"/>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-around ">
                    <div>
                        <i className="ms-2 h5 bi bi-mic"></i>
                    </div>
                    <div>
                        <i className="ms-2 h5 bi bi-image"></i>
                    </div>
                    <div>
                        <i className="ms-2 h5 bi bi-suit-heart"></i>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Chat;