import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image2 from './Images/uwp8914.jpeg';
import image1 from './Images/wp9135412-blue-mosque-4k-wallpapers.jpg';
import image3 from './Images/wp9135429-blue-mosque-4k-wallpapers.jpg';
import image4 from './Images/wp9135529-blue-mosque-4k-wallpapers.jpg';
import image5 from './Images/wp9135601-blue-mosque-4k-wallpapers.jpg';
import image from './DP/1.jpg';
import Post_related from './Post_related';
import { useContext } from 'react';
import { MyContext } from '../../../MyContext';
const Image_post = () => {
    const {theme,showPopover} =useContext(MyContext);
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return ( 
        <>
        <div className={` d-flex align-items-center justify-content-between mb-2 ${theme === true ? 'text-light' : 'text-dark' }`}>
                        <div className={`d-flex mx-md-5 ${showPopover!==true ? 'Blur' : '' }`}>
                            <div className="display-6 text-danger me-2">
                                <img src={image} alt='1image' className='rounded-circle mb-1 dp-info'></img>
                                {/* <i className="bi bi-person-circle"></i> */}
                            </div>
                            <div className="d-flex justify-content-between fw-bold">
                                <h5>Subhan</h5>
                                <p className="ms-2">.4d</p>
                            </div>
                        </div>
                        <Post_related/>
                    </div>     {/* ////////////////////   Image /////////////////////// */}
                    <div className={`row justify-content-center mt-2 ${showPopover!==true ? 'Blur' : '' }`}>
                        <div className="col-12 col-md-10 col-lg-9 text-center">
                            {/* ********************************************************* */}
                            <Carousel className=' width-`100vh me-lg-3  text-center' responsive={responsive} infinite={false} arrows={true} >
                                <img src={image1} className='img-fluid height-100vh ' alt='Posted-Image1' ></img>   
                                <img src={image2} className='img-fluid height-100vh ' alt='Posted-Image2' ></img>
                                <img src={image3} className='img-fluid height-100vh ' alt='Posted-Image3' ></img>
                                <img src={image4} className='img-fluid height-100vh ' alt='Posted-Image4' ></img>    
                                <img src={image5} className='img-fluid height-100vh ' alt='Posted-Image5' ></img>    
                            </Carousel>
                            {/* ******************************************************** */}
                        {/* ////////////////////   Reaction  /////////////////////// */}
                            <div className={`d-flex mx-1 mt-2 justify-content-between ${theme ? 'text-light' : 'text-dark' }`}>
                                <div className="d-flex text-start">
                                    <i className="h3 mx-1 bi bi-suit-heart"></i>
                                    <i className="h3 mx-1 bi bi-chat"></i>
                                    <i className="h3 mx-1 bi bi-send"></i>
                                </div>
                                <div className={``}>
                                    <i className="h3 mx-1 bi bi-bookmark"></i>
                                </div>
                            </div>
                            <div className={`d-flex ${theme ? 'text-light' : 'text-dark' }`}>
                                <h6 className="fw-bold ms-2 me-2">Subhan</h6>
                                <p>This is the Description of the video</p>
                            </div>
                        </div>
                    </div>
   
       </>
     );
}
 
export default Image_post;