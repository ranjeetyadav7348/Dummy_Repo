
import React, { useEffect, useState } from "react";

import "./combine.css";
import ContentList from "./ContentList";
import ExpandedContent from "./ExpandedContent";
import VideoModal from "./VideoModal";
import {Blur} from "react-blur";
import Header from "../partials/Header/Header";
import Banner from "../Browse/Banner";

function Combine() {
  const [selectedContent, setSelectedContent] = useState();
  const [selectedSubContent, setSelectedSubContent] = useState(null);
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [isContentWatched, setContentWatched] = useState(false);

  const handleContentClick = (content) => {
  //  console.log(content);
    setSelectedContent(content);
    setSelectedSubContent(null);
  };

  const handleSubContentClick = (subContent) => {
    setSelectedSubContent(subContent);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setContentWatched(true);
 
  };



 

  return (

    <div id="hero">
      <div className="d-none d-md-block">
        <Header />
        <Banner />
      </div>
    <div className="app-container">
      <div className="content-list-container">
        <ContentList
          selectedContent={selectedContent}
          onContentClick={handleContentClick}
          selectedSubContent={selectedSubContent}
        />
      </div>
      <div className="expanded-content-container">
          
            <ExpandedContent
              selectedContent={selectedContent}
              selectedSubContent={selectedSubContent}
              onSubContentClick={handleSubContentClick}
             
            />
          
        </div>
      {isVideoModalOpen && (
        <VideoModal
        
          onClose={closeVideoModal}
          videoUrl={selectedSubContent.videoUrl}
        />
      )}
    </div>

    </div>
   
  );
}

export default Combine;
