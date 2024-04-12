import React, { useState, useRef } from 'react';

function VideoPlayer() {
    const videoRef = useRef(null);
    
    // Function to play the video
    const playVideo = () => {
      videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
};

    return (
        <div className=' relative'>
            <video ref={videoRef} controls>
                <source src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button onClick={playVideo} onDoubleClick={pauseVideo}  className=' bg-green-600 absolute top-1/2'>Play Video</button>
        </div>
    );
}

export default VideoPlayer;
