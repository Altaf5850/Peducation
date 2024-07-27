import React from "react";

function Learn() {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="container mx-auto font-merienda flex flex-col md:flex-row justify-between p-5">
        <div className="right flex flex-col space-y-5 md:w-1/2 p-5">
          <div className="p-5">
            <h3 className="text-xl font-semibold text-center text-cyan-400">
              LEARN ANYTHING
            </h3>
            <h1 className="text-3xl font-bold pt-5">
              Benefits About Online Learning Expertise
            </h1>
          </div>
          <div className="items space-y-10">
            <div className="item flex flex-col md:flex-row justify-between items-start">
              <div className="p-5">
                <img
                  src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                  alt=""
                  className="max-w-full h-auto"
                />
              </div>
              <div className="mt-5 md:mt-0 md:ml-5">
                <h2 className="text-2xl font-semibold">Online Courses</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="item flex flex-col md:flex-row justify-between items-start">
              <div className="p-5">
                <img
                  src="https://img.icons8.com/ios/80/000000/diploma.png"
                  alt=""
                  className="max-w-full h-auto"
                />
              </div>
              <div className="mt-5 md:mt-0 md:ml-5">
                <h2 className="text-2xl font-semibold">Earn A Certificate</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="item flex flex-col md:flex-row justify-between items-start">
              <div className="p-5">
                <img
                  src="https://img.icons8.com/ios/80/000000/athlete.png"
                  alt=""
                  className="max-w-full h-auto"
                />
              </div>
              <div className="mt-5 md:mt-0 md:ml-5">
                <h2 className="text-2xl font-semibold">Learn with Experts</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="left flex justify-center items-center mt-5 md:mt-0 md:w-1/2">
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNl8zZF9yZW5kZXJfb2ZfYW5fYWR1bHRfbWFuX3VzaW5nX2FfbGFwdG9wX2Rhcmstc19lNmRlY2ZjZS0wMzBmLTRjN2QtYWY3YS01MWRlY2VhM2I5ZTBfMS5qcGc.jpg"
            alt="img"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Learn;
