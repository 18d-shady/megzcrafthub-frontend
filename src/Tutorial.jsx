import React from 'react';
import videourl from './tutorial.mp4';

function Tutorial() {
  return (
    <div className="container mx-auto p-4 pt-4 md:p-6 lg:p-8 border-b border-gray-300">
      <h2 className="text-center my-2 text-lg md:text-3xl font-bold inline-block text-slate-600 font-league">Explore our tutorials</h2>
      <div className="video-container relative mb-6">
        <video
          className="w-full h-full object-cover"
          src={videourl}
          type="video/mp4"
          controls
          loop
          muted
          playsInline
        />
      </div>
    
    </div>
  );
}
export default Tutorial;