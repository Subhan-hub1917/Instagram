import image2 from './Info images/2.jpg';
import image3 from './Info images/3.jpg';
import image4 from './Info images/4.jpg';
const Info_Part_2 = () => {
    return ( 
            <>
                <div className="row p-3 justify-content-around align-items-center">
                    <div className="col-8">
                        <div className="d-flex align-items-center">
                            <img src={image4} alt='1image' className='rounded-circle mb-1 dp-info'></img>
                            {/* <i className="h3 bi bi-person"></i> */}
                            <h6 className="ms-1">Jaun</h6>
                        </div>
                    </div>
                    <div className="col-2 ">
                        <a to="/" className="text-decoration-none"><h6>Follow</h6></a>
                    </div>
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className="row p-3 justify-content-around align-items-center">
                    <div className="col-8">
                        <div className="d-flex align-items-center">
                            <img src={image2} alt='1image' className='rounded-circle mb-1 dp-info'></img>
                            {/* <i className="h3 bi bi-person"></i> */}
                            <h6 className="ms-1">Jaun</h6>
                        </div>
                    </div>
                    <div className="col-2 ">
                        <a to="/" className="text-decoration-none"><h6>Follow</h6></a>
                    </div>
                </div><div className="row p-3 justify-content-around align-items-center">
                    <div className="col-8">
                        <div className="d-flex align-items-center">
                            <img src={image3} alt='1image' className='rounded-circle mb-1 dp-info'></img>
                            {/* <i className="h3 bi bi-person"></i> */}
                            <h6 className="ms-1">Jaun</h6>
                        </div>
                    </div>
                    <div className="col-2 ">
                        <a to="/" className="text-decoration-none"><h6>Follow</h6></a>
                    </div>
                </div>
            </>
        );
}
 
export default Info_Part_2;