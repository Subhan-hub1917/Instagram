import { useContext } from "react";
import Menu from "../Menu";
import { MyContext } from "../../../MyContext";
import Chat from "./Messenger/Chat";
import DefaultChat from "./Messenger/DefaultChat";

const Messenger = () => {
    const {openChat,handleChat,theme }=useContext(MyContext)
    return ( 
        <div className={`container-fluid popup ${theme ? 'bg-dark text-light':'bg-light text-dark'}`}>
            <div className="row overflow-hidden">
                {/* ////////////////////////////////// */}
                        <Menu/>
                {/* ////////////////////////////////// */}
                <div className={`col-12 col-md-4 col-lg-3 d-flex flex-column height-100vh  border-start border-end border-dark d-block ${openChat === true ? 'd-none d-md-block':'' }`}>
                    <div className="p-3 p-md-0 ">
                        <div className="my-3 d-flex justify-content-between">
                            <h5>Subhan_qamar_2002</h5>
                            <i className="bi bi-gear"></i>
                        </div>
                        <div className="my-3 d-flex justify-content-between align-items-center">
                            <p>Messages</p>
                            <p className="btn btn-light">Request</p>
                        </div>
                    </div>
                    {/* ******************************************************* */}
                    <div className={`d-flex my-2 align-items-center btn ${theme ? 'btn-dark ':'btn-light'}`} onClick={()=>handleChat()}>
                        <i className="display-5 bi bi-person-circle"></i>
                        <div className="h5 ms-2">Yoshi</div>
                    </div>
                    <div className={`d-flex my-2 align-items-center btn ${theme ? 'btn-dark ':'btn-light'}`} onClick={()=>handleChat()}>
                        <i className="display-5 bi bi-person-circle"></i>
                        <div className="h5 ms-2">Jeff</div>
                    </div>
                    <div className={`d-flex my-2 align-items-center btn ${theme ? 'btn-dark ':'btn-light'}`} onClick={()=>handleChat()}>
                        <i className="display-5 bi bi-person-circle"></i>
                        <div className="h5 ms-2">Michael</div>
                    </div>
                    {/* ************************************************************** */}
                </div>
                {/* /////////////////////////////////////// */}
                    
                    <DefaultChat/>
                    <Chat/>

                {/* ////////////////////////////////////////// */}
            </div>
        </div>
     );
}
 
export default Messenger;