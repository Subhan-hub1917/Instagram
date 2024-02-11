import { useContext } from "react";
import Notifications from "./Menu_parts/Notifications";
import { MyContext } from "../../MyContext";

const Navbar = () => {
    const {theme,setTheme,toggler}=useContext(MyContext);
    return ( 
        <div className={`d-block d-md-none sticky-top container-fluid border-bottom overflow-hidden ${theme ? 'text-light border-light bg-dark':'text-dark border-dark bg-light'}`}>
            <div className="row d-flex align-items-center justify-content-between">
            
                <div className="col-2 ">
                    <div className="h4">
                            Instagram
                    </div>    
                </div>
            
                <div className="col-5">
                <div className="ms-2 input-group border border-dark border-1 rounded-pill bg-light">
                    <div className="input-group-text outline-none border rounded-pill">
                        <span className="i"><i className="bi bi-search"></i></span>
                    </div>
                    <input type="text" id="searchInput" className="outline-none border border-none rounded-pill form-control no-focus" placeholder="Search.." />
                    </div>
                </div>
    
            
                <div className="col-3 text-end d-flex align-items-center mb-2">
                    <i className="h4 ms-2 mt-2 bi bi-brightness-high" onClick={()=>toggler(setTheme)}></i>
                    <Notifications className="me-1" />
                </div>
            
            </div>
        </div>
     );
}
 
export default Navbar;