import { useContext, useEffect, useRef, useState } from 'react';
import video from '../Main_parts/Dilpe.mp4';
import video1 from '../Main_parts/Dilpe1.mp4';
import Menu from '../Menu';
import { MyContext } from '../../../MyContext';
import { Link } from 'react-router-dom';



const Reels = () => {

    const {theme,setReels} = useContext(MyContext);
    
    

    const [mute,setMute]=useState([true]);
    const [play,setPlay]=useState(false);

    
    const videoRef0 = useRef(null);
    const videoRef1 = useRef(null);
    
    
    const handlePlayPause=(Reference)=>{
        const video = Reference.current;

        if (!play)
            {
                video.play();
                setPlay(true);
            }
            else
            {
                video.pause();
                setPlay(false);
            }
    }


    const handleMute=(Reference)=>{
        const video = Reference.current;

        if (!mute)
            {
                video.muted= !video.muted;
                setMute(true);
            }
            else
            {
                video.muted=true;
                setMute(false);
            }
    }

    
////////////////////////////////   Scroll   ///////////////////////////////////////////


    return ( 
        
                <div className={`col-12 col-md-11 col-lg-10 d-flex flex-column  ${theme ? 'bg-dark text-light':'bg-light text-dark' }`}>
                    <div className='row d-flex scrollable-container' >
                    
                    
                    {/* ///////////////////////////////////////////////////////////////////////////////////// */}
                <div className={`col-0 col-md-3 col-lg-4 height-100vh d-none d-md-block ${theme ? 'bg-dark':'bg-light' }` }>    
                        </div>

                        <div className='col-12 col-md-6 col-lg-4 height-100vh position-relative  scrollable-item'>
                            <video ref={videoRef0} src={video} className='col-12 col-md-11 mt-2  my-md-4 img-fluid height-80vh' onClick={()=>handlePlayPause(videoRef0)} autoPlay={false} controls={false} muted={mute}></video>
                            
                            <div className='d-flex flex-column position-absolute end-0 top-0 me-2 mt-4 rounded-circle'>
                                <Link className='text-decoration-none' to="/" >
                                    <i className={`d-block d-md-none mb-4 bi bi-x h4 ${theme ? 'text-light':'text-dark' }`} onClick={()=>setReels(false)}></i>
                                </Link>
                                <i className={`h4 bi ${mute? 'bi-volume-down':'bi-volume-up'}`} onClick={()=>{setMute(!mute)}}></i>
                            </div>
                            <div className='me-2 d-flex flex-column position-absolute end-0 top-50  '>
                                <i className='h4  bi bi-suit-heart'></i>
                                <div className='mb-4'>307K</div>
                                <i className='h4  bi bi-chat'></i>
                                <div className='mb-4'>21K</div>
                                <i className='h4 mb-4 bi bi-send'></i>
                                <i className='h4 mb-4 bi bi-bookmark'></i>
                                <i className='h4 mb-4 bi bi-three-dots'></i>
                            </div>
                            <div className='align-items-center d-flex position-absolute bottom-0 mb-5 ms-5 pb-4 mb-md-5 ms-md-0 pb-md-0 mb-lg-5 ms-lg-0 pb-mg-4 '>
                                <div>
                                    <i className='h3 mb-4 bi bi-person-circle me-2'></i>
                                </div>
                                <div className='me-2'>UserName</div>
                                <div className='btn btn-light btn-sm ms-2 d-block'>Follow</div>
                            </div>
                            <div className='align-items-center d-flex position-absolute bottom-0 mb-5 ms-5 mb-md-3 ms-md-0'>
                                <div className='me-2'>This is the Description of the Video</div>
                            </div>
                            
                        </div>
                        <div className={`col-0 col-md-3 col-lg-4 height-100vh d-none d-md-block  ${theme ? 'bg-dark':'bg-light' } `}>
                        </div>

                            {/* //////////////////////////////////////////////////////////////////////////// */}

                        
                        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
                    <div className={`col-0 col-md-3 col-lg-4 height-100vh d-none d-md-block ${theme ? 'bg-dark':'bg-light' }`}>    
                        </div>

                        <div className='col-12 col-md-6 col-lg-4 height-100vh position-relative scrollable-item '>
                            <video ref={videoRef1} src={video1} className='col-12 col-md-11 mt-2  my-md-4 img-fluid height-80vh' onClick={()=>handlePlayPause(videoRef1)} autoPlay={false}  controls={false} muted={mute}></video>
                            
                            <div className='d-flex flex-column position-absolute end-0 top-0 me-2 mt-4 rounded-circle'>
                                <Link className='text-decoration-none' to="/" >
                                    <i className={`d-block d-md-none mb-4 bi bi-x h4 ${theme ? 'text-light':'text-dark' }`} onClick={()=>setReels(false)}></i>
                                </Link>
                                    <i className={`h4 bi ${mute? 'bi-volume-down':'bi-volume-up'}`} onClick={()=>{setMute(!mute)}}></i>
                            </div>
                            <div className='me-2 d-flex flex-column position-absolute end-0 top-50 '>
                                <i className='h4  bi bi-suit-heart'></i>
                                <div className='mb-4'>307K</div>
                                <i className='h4  bi bi-chat'></i>
                                <div className='mb-4'>21K</div>
                                <i className='h4 mb-4 bi bi-send'></i>
                                <i className='h4 mb-4 bi bi-bookmark'></i>
                                <i className='h4 mb-4 bi bi-three-dots'></i>
                            </div>
                            <div className='align-items-center d-flex position-absolute bottom-0 mb-5 ms-5 pb-4 mb-md-5 ms-md-0 pb-md-0 mb-lg-5 ms-lg-0 pb-mg-4 '>
                                <div>
                                    <i className='h3 mb-4 bi bi-person-circle me-2'></i>
                                </div>
                                <div className='me-2'>UserName</div>
                                <div className='btn btn-light btn-sm ms-2 d-block'>Follow</div>
                            </div>
                            <div className='align-items-center d-flex position-absolute bottom-0 mb-5 ms-5 mb-md-3 ms-md-0'>
                                <div className='me-2'>This is the Description of the Video</div>
                            </div>
                            
                        </div>
                        <div className={`col-0 col-md-3 col-lg-4 height-100vh d-none d-md-block  ${theme ? 'bg-dark':'bg-light' } `}>
                        </div>
                        {/* //////////////////////////////////////////////////////////////////////////// */}
                        
                        </div>
            </div>
     );
}
 
export default Reels;