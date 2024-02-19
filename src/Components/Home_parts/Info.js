import { useContext } from "react";
import Info_Part_1 from "./Info_parts/Info_Part_1";
import Info_Part_2 from "./Info_parts/Info_Part_2";
import Info_Part_3 from "./Info_parts/Info_Part_3";
import { MyContext } from "../../MyContext";
const Info = () => {
    const { theme,showPopover } =useContext(MyContext);
    return ( 
        
                <div className={`d-none d-lg-block col-3 p-3 d-flex flex-column sticky-top height-100vh 
                ${showPopover!==true ? 'Blur' : '' }
                ${theme === true ? 'text-light bg-dark' : 'text-dark bg-light' } `}>
                    <Info_Part_1/>
                    <Info_Part_2/>
                    <Info_Part_3/>   
                </div>
     );
}
 
export default Info;