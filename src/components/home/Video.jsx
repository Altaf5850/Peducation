import React from "react";

function Video() {
  return (
    <div className="p-6 lg:p-12 font-merienda overflow-hidden w-full">
      <h2 className="text-center text-2xl lg:text-3xl pt-2">Our Media</h2>
      <h1 className="text-center text-3xl lg:text-4xl pt-2">
        Teaching our students
      </h1>
      <p className="text-center p-4 lg:p-8 lg:w-2/4 m-auto w-full">
        Welcome to our online school, where learning knows no boundaries. With
        our innovative virtual platform, students can access high-quality
        education from anywhere in the world.
      </p>
      <div className="p-4 lg:p-5 h-64 lg:h-[500px] w-full lg:w-3/4 m-auto">
        <video
          src="https://videos.pexels.com/video-files/3129424/3129424-uhd_2560_1440_24fps.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-center"
        ></video>
      </div>
    </div>
  );
}

export default Video;
