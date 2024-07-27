import React from "react";
import { FaAward } from "react-icons/fa";

const Ban = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4 bg-[#325843]">
      <div className="box flex flex-col items-center justify-center p-4 bg-transparent text-white rounded-lg">
        <div className="img">
          <img
            src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
            alt="Success Stories"
          />
        </div>
        <div className="text text-center mt-4">
          <h1 className="text-3xl font-bold">1,000</h1>
          <h3 className="text-lg">SUCCESS STORIES</h3>
        </div>
      </div>
      <div className="box flex flex-col items-center justify-center p-4 bg-transparent text-white rounded-lg">
        <div className="img">
          <img
            src="https://img.icons8.com/ios/80/ffffff/athlete.png"
            alt="Trusted Tutors"
          />
        </div>
        <div className="text text-center mt-4">
          <h1 className="text-3xl font-bold">1,000</h1>
          <h3 className="text-lg">TRUSTED TUTORS</h3>
        </div>
      </div>
      <div className="box flex flex-col items-center justify-center p-4 bg-transparent text-white rounded-lg">
        <div className="img">
          <img
            src="https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png"
            alt="Schedules"
          />
        </div>
        <div className="text text-center mt-4">
          <h1 className="text-3xl font-bold">1,000</h1>
          <h3 className="text-lg">SCHEDULES</h3>
        </div>
      </div>
      <div className="box flex flex-col items-center justify-center p-4 bg-transparent text-white rounded-lg">
        <div className="img">
          <img
            src="https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png"
            alt="Courses"
          />
        </div>
        <div className="text text-center mt-4">
          <h1 className="text-3xl font-bold">587</h1>
          <h3 className="text-lg">COURSES</h3>
        </div>
      </div>
      <div className="box flex flex-col items-center justify-center p-4 bg-transparent text-white rounded-lg">
        <div className="img">
          <FaAward size={80} color="white" />
        </div>
        <div className="text text-center mt-4">
          <h1 className="text-3xl font-bold">150</h1>
          <h3 className="text-lg">AWARDS</h3>
        </div>
      </div>
    </div>
  );
};

export default Ban;
