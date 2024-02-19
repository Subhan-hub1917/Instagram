import Menu from "./Components/Home_parts/Menu";
import Reels from "./Components/Home_parts/Menu_parts/Reels";

const ReelsPage = () => {
    return ( 
        <div className="container-fluid ">
            <div className='row d-flex '>
                <Menu/>
                <Reels/>
            </div>
        </div>
     );
}
 
export default ReelsPage;