import React from 'react';
import videourl from './tutorial.mp4';

function Tutorial() {
  return (
    <div className="container mx-auto p-4 pt-4 md:p-6 lg:p-12 border-b border-gray-300">
      
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
      <h2 className="text-3xl font-bold inline-block text-slate-600 font-league">Explore our tutorials</h2>
      <h2 className="text-lg font-bold inline-block text-purple-600 font-league
      border border-purple-700 float-right px-5 py-1">Explore</h2>
    </div>
  );
}
export default Tutorial;