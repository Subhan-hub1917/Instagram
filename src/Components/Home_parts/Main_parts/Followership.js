import { useContext } from "react";
import Post_related from "./Post_related";
import Video_post from "./Video_post";
import { MyContext } from "../../../MyContext";
import Videopost from "./Video_post";

const Followership = () => {
    const {theme ,showPopover}=useContext(MyContext)
    return ( 
        // row m-4
        <div className={` container-fluid mt-3  ${theme === true ? 'text-light' : 'text-dark' } `}>
                    {/* ///////////////////////////////////////////// */}
                    <div className={`d-flex align-items-center justify-content-between mb-2 ${showPopover!==true ? 'Blur' : '' }`}>
                        <div className="d-flex mx-md-5">
                            <div className="display-6 text-danger me-2">
                                <i className="bi bi-person-circle"></i>
                            </div>
                            <div className="d-flex justify-content-between fw-bold">
                                <h5>Subhan</h5>
                                <p className="ms-2">.4d</p>
                            </div>
                        </div>
                        <Post_related/>
                    </div>
                        {/* ////////////////////   video /////////////////////// */}
                    <div className={`row justify-content-center mt-2 ${showPopover!==true ? 'Blur' : '' }`}>
                        <div className="col-12 col-md-10 col-lg-9 text-center">
                            <Videopost/>
                        {/* ////////////////////   Reaction  /////////////////////// */}
                            <div className="d-flex mx-1 mt-2 justify-content-between">
                                <div className="d-flex text-start">
                                    <i className="h3 mx-1 bi bi-suit-heart"></i>
                                    <i className="h3 mx-1 bi bi-chat"></i>
                                    <i className="h3 mx-1 bi bi-send"></i>
                                </div>
                                <div className="">
                                    <i className="h3 mx-1 bi bi-bookmark"></i>
                                </div>
                            </div>
                            <div className="d-flex">
                                <h6 className="fw-bold ms-2 me-2">Subhan</h6>
                                <p>This is the Description of the video</p>
                            </div>
                        </div>
                    </div>
                </div>
     );
}
 
export default Followership;