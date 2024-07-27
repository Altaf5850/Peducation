import React from "react";

function Aabout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 font-merienda">
      <div className="p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Innovation and Research
        </h1>
        <p className="p-4 md:p-8 text-center">
          Innovation and research are the cornerstones of our educational
          philosophy. We are dedicated to creating an environment that fosters
          creativity, curiosity, and a passion for discovery. Our institution
          encourages students and faculty to explore new ideas, challenge
          conventional thinking, and push the boundaries of knowledge.
          <br /> <br />
          We invest heavily in cutting-edge research facilities and provide
          access to the latest technology, ensuring our community has the tools
          they need to innovate. Our research programs span a wide range of
          disciplines, from science and engineering to humanities and social
          sciences, promoting interdisciplinary collaboration and holistic
          learning.
        </p>
      </div>
      <div className="p-4 md:p-8">
        <video
          src="https://videos.pexels.com/video-files/3209298/3209298-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
          className="w-full"
        ></video>
      </div>
    </div>
  );
}

export default Aabout;
