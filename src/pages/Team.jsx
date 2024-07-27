import React from "react";
import Teeame from "../components/team/teams";

function Team() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-12 bg-[#7FA896] pt-32">
      <div className="relative w-full max-w-5xl mb-10">
        <video
          autoPlay
          loop
          muted
          src="https://videos.pexels.com/video-files/3249674/3249674-uhd_2560_1440_25fps.mp4"
          className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
        ></video>

        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white p-6 md:p-10 font-merienda text-center">
            Our Team
          </h1>
        </div>
      </div>
      <Teeame />
    </div>
  );
}

export default Team;
