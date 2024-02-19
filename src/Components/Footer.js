import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";

const Footer = () => {
    const {theme,reels,setReels,story} = useContext(MyContext)
    return ( 
        <div className={` sticky-bottom bg-light d-md-none container-fluid ${theme ? 'bg-dark text-light':'bg-light text-dark '} ${ reels || story ? 'd-none':' d-block d-md-none'}`}>
            <div className="row py-2 border-top border-dark justify-content-between ">
                <div className="col-2 ">
                    <Link to="/" className="text-decoration-none">
                       <i className={`h4 bi bi-house-door  ${theme ? 'text-light ':'text-dark'}`}></i>               
                    </Link>
                </div>        
                
                <div className="col-2">
                    <i className="h4  bi bi-compass"></i>    
                </div>
                
                <div className="col-2">
                    <Link to="/Reels" className="text-decoration-none" onClick={()=>setReels(true)}>
                        <i className={`h4  bi bi-collection-play  ${theme ? 'text-light ':'text-dark'}`}></i>   
                    </Link>    
                </div>
                
                <div className="col-2">
                    <i className="h4 bi bi-plus-square"></i>
                    
                </div>
                
                <div className="col-2">
                    <Link to="/Messenger" className={`text-decoration-none  ${theme ? 'text-light ':'text-dark'}`}>
                        <i className="h4 bi bi-chat-dots"></i>
                    </Link>
                </div>
                
                <div className="col-2">
                    <Link to="/Profile" className={`text-decoration-none ${theme ? 'text-light ':'text-dark'}`}>
                        <i className="h4 bi bi-person"></i>
                    </Link>
                </div>

            </div>
        </div>
     );
}
 
export default Footer;