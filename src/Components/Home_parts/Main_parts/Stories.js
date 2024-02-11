import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MyContext } from '../../../MyContext';

const Stories = () => {
  const { theme ,showPopover} =useContext(MyContext);
  
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
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  
  return (
    <div className={`container-fluid ${theme === true ? 'text-light' : 'text-dark' } ${showPopover!==true ? 'Blur' : '' }`}>
        <Carousel responsive={responsive} infinite={false} arrows={false} >
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>Subhan</h6> 
          </div>
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>Smith</h6> 
          </div>
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>Paul</h6> 
          </div>
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>Jack</h6> 
          </div>
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>Hanry</h6> 
          </div>
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>Shawn</h6> 
          </div>
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>Melendiz</h6> 
          </div>
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>Zack</h6> 
          </div>
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>George</h6> 
          </div>
          <div className="m-0 p-1 text-center">
            <div className="display-4 text-danger"><i className="bi bi-person-circle"></i></div>
            <h6>Warner</h6> 
          </div>
        </Carousel>
    </div>
  );
}

export default Stories;
