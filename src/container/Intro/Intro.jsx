import React from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef=React.useRef(null);
  const handleVideo = () =>{
    setPlayVideo((prevVideo)=>!prevVideo);
    if(playVideo==true){
      vidRef.current.pause();
    }
    else
      vidRef.current.play();
  }
 return(

  <div className="app__video">
    <video src={meal} type="video/mp4" loop controls={false} ref={vidRef} muted/>
    <div className="app__video-overlay flex__center">
      <div className='app__video-overlay_circle flex__center'
        onClick={handleVideo}
      >
        {playVideo ? <BsPauseFill color="#fff" fontSize={27}/>: <BsFillPlayFill color="#fff" fontSize={27}/>}
      </div>
    </div>
  </div>
)};

export default Intro;
