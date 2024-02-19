import { useContext } from "react";
import { MyContext } from "../../../../MyContext";

const DefaultChat = () => {
    const {isMessenger,openChat}=useContext(MyContext);
    
    return ( 
            <div className={`d-none height-100vh border-start ${isMessenger ? 'col-12 col-md-7 col-lg-8':'col-12 col-md-7 col-lg-7'} ${openChat === true ?'d-md-none':'d-md-block'}` }>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">    
                            <div className="py-5 my-5">
                                <i className="display-1 text-primary bi bi-messenger"></i>
                                <h4>Your Messages</h4>
                                <p>Send Private Photos and Messages to a Friend and Group</p>
                                <div className="btn btn-primary">Send Message</div>        
                            </div>
                        </div>
                    </div>
                </div>
     );
}
 
export default DefaultChat;