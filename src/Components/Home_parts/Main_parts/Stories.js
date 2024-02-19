import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from './DP/1.jpg'
import image2 from './DP/2.jpg'
import image3 from './DP/3.jpg'
import image4 from './DP/4.jpg'
import image5 from './DP/5.jpg'
import { MyContext } from '../../../MyContext';
import { Link } from 'react-router-dom';

const Stories = () => {
  const { theme ,showPopover,setStory} =useContext(MyContext);
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5
    }
  };
  
  return (
    <div className={`container-fluid ${theme === true ? 'text-light' : 'text-dark' } ${showPopover!==true ? 'Blur' : '' }`}>
        <Carousel responsive={responsive} infinite={false} arrows={false} >
    
          <div className="m-0 p-1 text-center">
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>
              <div className="display-4 text-danger">
                <img src={image1} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                {/* <i className="bi bi-person-circle"></i> */}
                </div>
            </Link>
            <h6>Subhan</h6> 
          </div>

          <div className="m-0 p-1 text-center">
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>
              <div className="display-4 text-danger">
                <img src={image2} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                {/* <i className="bi bi-person-circle"></i> */}
                </div>
            </Link>
            <h6>Smith</h6> 
          </div>
          
          <div className="m-0 p-1 text-center">
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>
              <div className="display-4 text-danger">
                <img src={image3} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                {/* <i className="bi bi-person-circle"></i> */}
                </div>
            </Link>
            <h6>Paul</h6> 
          </div>

          <div className="m-0 p-1 text-center">
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>  
              <div className="display-4 text-danger">
                <img src={image4} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                {/* <i className="bi bi-person-circle"></i> */}
                </div>
            </Link>
            <h6>Jack</h6> 
          </div>


          <div className="m-0 p-1 text-center">
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>
              <div className="display-4 text-danger">
                <img src={image5} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                {/* <i className="bi bi-person-circle"></i> */}
                </div>
            </Link>
            <h6>Hanry</h6> 
          </div>
  
          <div className="m-0 p-1 text-center">  
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>  
              <div className="display-4 text-danger">
                <img src={image1} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                {/* <i className="bi bi-person-circle"></i> */}
                </div>
            </Link>
            <h6>Shawn</h6> 
          </div>

          <div className="m-0 p-1 text-center">          
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>
                <div className="display-4 text-danger">
                  <img src={image2} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                  {/* <i className="bi bi-person-circle"></i> */}
                  </div>
            </Link>
            <h6>Melendiz</h6> 
          </div>
    
          <div className="m-0 p-1 text-center">        
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>
              <div className="display-4 text-danger">
                <img src={image3} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                {/* <i className="bi bi-person-circle"></i> */}
                </div>
            </Link>
            <h6>Zack</h6> 
          </div>

          <div className="m-0 p-1 text-center">
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>
              <div className="display-4 text-danger">
                <img src={image4} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                {/* <i className="bi bi-person-circle"></i> */}
                </div>
          </Link>
            <h6>George</h6> 
          </div>

          <div className="m-0 p-1 text-center">
            <Link to="/Story" className='text-decoration-none text-light' onClick={()=>{setStory(true)}}>
              <div className="display-4 text-danger">
                <img src={image5} alt='1image' className='rounded-circle mb-1 dp border border-4 border-danger'></img>
                {/* <i className="bi bi-person-circle"></i> */}
                </div>
            </Link>
            <h6>Warner</h6> 
          </div>
          
        </Carousel>
    </div>
  );
}

export default Stories;
