import { useContext, useEffect, useRef, useState } from 'react';
import dp from './DP/1.jpg';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../MyContext';

const Story = () => {
    const {setStory}=useContext(MyContext);
    const videoref=useRef(null);
    const [play,setPlay]=useState(true);
    const [mute,setMute]=useState(false);
    
    useEffect(()=>{
    },[])
    const toggle=()=>{
        const video = videoref.current;
        if (play) {
            video.pause();
            setPlay(false);
            
        }
        else{
            video.play();
            setPlay(true);
        }
    }
    const toggleVolume=()=>{
            setMute(!mute)
}
    return ( 
        <div className="container-fluid overflow-hidden">
            <div className="row">
                
                <div className="col-0 col-md-2 col-lg-4 d-none d-md-block bg-dark height-100vh height-lg-100vh ">
                    <div className="h2 text-light fw-bold d-none d-lg-block">Instagram</div>
                </div>

                <div className="col-12 col-md-8 col-lg-4 height-100vh position-relative m-0 p-0 border-start">
 
                        <video src="./Dilpe.mp4" ref={videoref} className="img-fluid" muted={mute} controls={false} autoPlay={true}/>
                    
                
                    <div className="col-12 p-2 d-flex align-items-center justify-content-between position-absolute top-0 ">
                        <div className="ms-1 d-flex align-items-center">
                            <img src={dp} className='rounded-circle dp-info'></img>
                            <div className='ms-1 text-light fw-bolder'>Subhan</div>
                            <div className='ms-1 text-light fw-bolder'>19h</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className={`ms-2 text-light fw-bolder h5 bi ${mute? 'bi-volume-down':'bi-volume-up'}`} onClick={()=>toggleVolume()}></i>
                            <i className={`ms-2 text-light fw-bolder h5 ${play ?'bi bi-pause':'bi bi-play'}`} onClick={()=>toggle()}></i>
                            <i className="ms-2 text-light fw-bolder h5 bi bi-three-dots"></i>
                            <Link to="/" className='d-block d-md-none text-decoration-none' >
                            <i className="d-block d-md-none ms-2 text-light fw-bolder h1 bi bi-x" onClick={()=>setStory(false)} ></i>
                            </Link>
                            
                        </div>
                    </div>

                    <div className="col-12 p-2 d-flex align-items-center position-absolute bottom-0 ">
                        <div className="ms-1 col-10">
                            <input className="border ms-5 rounded-pill width-80vh" placeholder="Message"/>
                        </div>
                        <div className="d-flex col-2 ">
                            <i className="h4 text-light fw-bolder bi bi-suit-heart"></i>
                            <i className="ms-2 h4 text-light fw-bolder bi bi-send"></i>
                        </div>
                    </div>
                </div>
                
                <div className="col-0 col-md-2 col-lg-4  d-none d-md-block bg-dark height-100vh text-end">
                    <Link to="/">
                        <i className='display-4 text-light bi bi-x 'onClick={()=>setStory(false)} ></i>
                    </Link>
                </div>

            </div>

        </div>
     );
}
 
export default Story;