import React from "react";
import Ourcourses from "../components/ourcourses/Ourcourses";

function Courses() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-12 bg-[#7FA896] pt-32">
      <div className="relative w-full max-w-5xl mb-10">
        <video
          src="https://videos.pexels.com/video-files/4443246/4443246-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
        ></video>
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white p-4 md:p-6 lg:p-10 font-merienda">
            Our Courses
          </h1>
        </div>
      </div>
      <Ourcourses />
    </div>
  );
}

export default Courses;
