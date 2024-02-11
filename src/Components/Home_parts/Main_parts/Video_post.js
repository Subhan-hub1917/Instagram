import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../../MyContext";
// import {vid} from '../../../../public/Nasheed.mp4';
// import {Liyakun} from './Liyakun.mp4';

const Videopost=()=>{

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const {theme}=useContext(MyContext);

    useEffect(() => {
        const video = videoRef.current;
    
        const handlePlayPause = () => {
          setIsPlaying(!video.paused);
        };
    
        const handleVolumeChange = () => {
          setIsMuted(video.muted);
        };
    
        video.addEventListener('play', handlePlayPause);
        video.addEventListener('pause', handlePlayPause);
        video.addEventListener('volumechange', handleVolumeChange);
    
        return () => {
          video.removeEventListener('play', handlePlayPause);
          video.removeEventListener('pause', handlePlayPause);
          video.removeEventListener('volumechange', handleVolumeChange);
        };
      }, []);
    
      const togglePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      };
    
      const toggleVolume = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
      };
    
     
return ( 
    <>
     <div className={`position-relative ${theme === true ? 'bg-secondary' : 'bg-dark' } `} >
      <video ref={videoRef}  src="./Dilpe.mp4" type="video/mp4"  onClick={togglePlayPause} 
        controls={false} autoPlay className="custom-video"  style={{ width: '100%', height: '550px' }}>
       {/* <source  src="./Liyakun.mp4" type="video/mp4" /> */}
      </video>
      <div className=" position-absolute bottom-0 end-0 " style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <div className="pb-3 text-end" onClick={toggleVolume}>
            <i className={`${isMuted===true?'bi-volume-mute':'bi-volume-up'}  p-1 text-light me-3 mb-2 h5 bi`}></i>
        </div>
      </div>
    </div>

    </>
     );
}
export default Videopost;