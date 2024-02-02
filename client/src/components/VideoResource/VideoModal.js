
import React from "react";
import "./VideoModal.css"; // Import the corresponding CSS file
import ReactPlayer from 'react-player'
import { GiCheckMark } from "react-icons/gi";

const VideoModal = ({ onClose, videoUrl }) => {

 


  return (
   
    <div className="video-modal">
      <div className="modal-content" >
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="video-container" >
          {/* <iframe
            title="video"
            width="100%"
            height="100%"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            <GiCheckMark />
          ></iframe> */}
          <ReactPlayer
          className='react-player'
          url={videoUrl}
          width='100%'
          height='100%'
          controls={true}
          onEnded={()=>
          {
           
           // Videoarr.push(i);
            if(localStorage.getItem("videoID"))
            {
              let data=JSON.parse(localStorage.getItem("videoID"));
              localStorage.setItem("videoID",JSON.stringify([...data,videoUrl]));
                console.log("data: ",data," video url: ",videoUrl);
            }
            else
            {
                localStorage.setItem("videoID",JSON.stringify([videoUrl]));

            }
          }}
        />
        </div>
      </div>
    </div>
   
  );
};

export default VideoModal;
