import { useContext } from "react";
import { MyContext } from "../../../MyContext";
import image from "./DP/1.jpg";
const Profile = () => {
    const {theme}=useContext(MyContext);
    return ( 
        
        <div className={`col-lg-10 col-12 col-md-11 p-md-3 height-100vh ${theme ? 'text-light bg-dark':'text-dark bg-light'} `}>
            <div className="d-flex p-2 justify-content-center">
                <div className="">
                    <img src={image} alt="Profile" className="rounded-circle"/>
                    {/* <i className="display-1 bi bi-person"></i> */}
                </div>
                <div className="">
                    <div className="d-md-flex align-items-center ms-5 ">
                        <h4>subhan_qamar_2002</h4>
                        <div className="d-flex">
                            <div className="btn btn-light ms-md-2">Edit Profile</div>
                            <div className="btn btn-light  ms-2">View Archieve</div>
                        </div>
                        <div className="btn btn-light  ms-2 d-none d-md-block"><i className="bi bi-gear"></i></div>
                    </div>
                    <div className="d-none d-md-flex  ms-5">
                        <div className="">3 Post</div>
                        <div className="ms-2">29 Follower</div>
                        <div className="ms-2">48 Following</div>    
                    </div>
                    <div className="ms-5 mt-2">
                        <div className="fw-bold">Subhan Qamar</div>
                        <div>This is the bio information</div>
                    </div>
                </div>
            </div>
            <div className="d-block d-md-none">
                <hr></hr>
            </div>
            <div className="d-flex d-block d-md-none py-2 justify-content-around">
                <div className="">3 Post</div>
                <div className="ms-2">29 Follower</div>
                <div className="ms-2">48 Following</div>    
            </div>
            <div className="justify-content-center mt-2">
                <div className="d-flex  border-top border-1 border-secondary justify-content-center">
                    <div className="d-flex mx-3 p-3 border-top border-2 border-dark "><i className=" me-2 d-none d-md-block bi bi-grid-3x3"></i> POSTS</div>
                    <div className="d-flex mx mx-3 p-3 border-top border-2 border-dark "><i className=" me-2 d-none d-md-block bi bi-collection-play"></i> REELS</div>
                    <div className="d-flex mx-3 p-3 border-top border-2 border-dark "><i className=" me-2 d-none d-md-block bi bi-bookmark "></i> SAVED</div>
                    <div className="d-flex mx-3 p-3 border-top border-2 border-dark "><i className=" me-2 d-none d-md-block bi bi-tag"></i> TAGGED</div>
                </div>
                <div>

                </div>
            </div>

        </div>   
     );
}
 
export default Profile;