import image1 from './Info images/1.jpg';
const Info_Part_1 = () => {
    return (
        <>
            <div className="row  p-3 justify-content-around align-items-center">
                <div className="col-8">
                    <div className="d-flex align-items-center">
                        <img src={image1} alt='1image' className='rounded-circle mb-1 dp-info'></img>
                        {/* <i className="h3 bi bi-person"></i> */}
                        <h6 className="ms-1">Subhan</h6>
                    </div>
                </div>
                <div className="col-2">
                    <a to="/" className="text-decoration-none"><h6>Swicth</h6></a>
                </div>
            </div>
            <div className="row justify-content-around align-items-center">
                <div className="col-8">
                    <h6>Suggested for You</h6>
                </div>
                <div className="col-3">
                    <a to="/" className="text-decoration-none text-end"><h6>See All</h6></a>
                </div>
            </div>
        </> 
     );
}
 
export default Info_Part_1;