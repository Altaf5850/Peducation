import React from "react";

function Admission() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-12 bg-[#7FA896] pt-24 md:pt-32">
      <div className="relative w-full max-w-5xl">
        <video
          src="https://videos.pexels.com/video-files/6282221/6282221-uhd_2560_1440_24fps.mp4"
          autoPlay
          loop
          muted
          className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
        ></video>
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white p-4 md:p-6 lg:p-10 font-merienda">
            Admissions Open
          </h1>
        </div>
      </div>
      <div className="p-4 md:p-28 text-center font-merienda">
        <h1 className="text-2xl md:text-3xl py-3 font-extrabold">ADMISSIONS</h1>
        <p className="text-base md:text-lg w-full md:w-2/4 mx-auto py-3">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </p>
        <img
          src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8 font-merienda">
        <div className="p-4 md:p-8 text-center">
          <h1 className="text-2xl md:text-3xl mb-4">Open House Information</h1>
          <p className="text-base md:text-lg">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. <br /> <br />
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. <br /> <br />
            Talk about your team and what services you provide. Tell your
            visitors the story of how you came up with the idea for your
            business and what makes you different from your competitors. Make
            your company stand out and show your visitors who you are.
          </p>
        </div>
        <div className="p-4 md:p-8 text-center rounded-lg text-white bg-[#325843]">
          <h1 className="text-2xl md:text-3xl">
            Prospective Parents & Students
          </h1>
          <p className="text-base md:text-lg pt-4">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. <br /> <br />
            Just click “Edit Text” or double click me to add your own content
            and make changes to the font. Feel free to drag and drop me anywhere
            you like on your page.
          </p>
          <h2 className="text-xl md:text-2xl text-blue-500 pt-4">
            FOR MORE INFORMATION
          </h2>
          <p className="text-base md:text-lg pt-4">E-MAIL US</p>
          <p className="text-base md:text-lg underline hover:text-blue-400">
            <a href="mailto:info@mysite.com">info@mysite.com</a>
          </p>
          <p className="text-base md:text-lg pt-4">CALL OUR MAINLINE</p>
          <p className="text-base md:text-lg underline hover:text-blue-400">
            <a href="tel:123-456-7890">123-456-7890</a>
          </p>
        </div>
      </div>
      <div className="w-full">
        <img
          src="https://sriaari.org/wp-content/uploads/2021/01/BannerFull_SRI.jpg"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Admission;
