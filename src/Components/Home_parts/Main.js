import { useContext } from "react";
import Followership from "./Main_parts/Followership";
import Image_post from "./Main_parts/Image_post";
import Stories from "./Main_parts/Stories";
import { MyContext } from "../../MyContext";
const Main = () => {
    const { theme} =useContext(MyContext);
    return (  

        <div className={`col-lg-7 col-12 col-md-11  p-3 d-flex flex-column justify-content-center text-center ${theme === true ? 'bg-dark' : 'bg-light' } `}>
            <Stories/>
            <Followership/>
            <Image_post/>
        </div>            

     );
}
 
export default Main;