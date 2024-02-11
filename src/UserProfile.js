import Menu from "./Components/Home_parts/Menu";
import Profile from "./Components/Home_parts/Menu_parts/Profile";

const UserProfile = () => {
    return ( 
        <div className="container-fluid ">
            <div className="row justify-content-between">
                <Menu/>
                <Profile/>    
            </div>  
        </div>
     );
}
 
export default UserProfile;