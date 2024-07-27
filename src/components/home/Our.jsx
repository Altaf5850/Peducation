import React from "react";
import { FaStar } from "react-icons/fa";

function Our() {
  return (
    <>
      <h1 className="text-center text-md font-bold text-[#4da373] font-merienda mt-5">
        OUR COURSES
      </h1>
      <h1 className="text-center text-3xl font-merienda pt-3">
        Explore Our Popular Online Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <div className="p-5 font-merienda bg-white rounded-xl shadow-xl">
          <div className="flex gap-3 p-5">
            <div className="bg-[#325843] rounded-full w-20 h-20 flex items-center justify-center">
              <img
                src="https://scintillating-smakager-860376.netlify.app/images/courses/c1.png"
                alt="img"
                className="w-16 h-16"
              />
            </div>
            <div className="font-bold w-40">
              <h1 className="text-2xl">Introducing to Software Engineering</h1>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/muslim-female-wear-face-mask-5229583-4385799.png"
              alt="img"
              className="w-8 h-8 rounded-full"
            />
            <p className="mt-2 text-xs">by Humera Pathan</p>
          </div>
          <div className="rate flex items-center justify-center text-xs">
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <label className="ml-2">(5.0)</label>
          </div>
          <div className="text-center pt-2">
            <p className="text-sm text-gray-500">50 lectures (190 hrs)</p>
          </div>
          <div className="text-center text-sm">
            <h2>₹23,999 All Course / ₹2000 per month</h2>
          </div>
          <button className="outline-btn mt-4 w-full py-2 border border-gray-500 text-gray-500 rounded hover:bg-[#325843] hover:text-white transition">
            ENROLL NOW!
          </button>
        </div>
        <div className="p-5 font-merienda bg-white rounded-xl shadow-xl">
          <div className="flex gap-3 p-5">
            <div className="bg-[#325843] rounded-full w-20 h-20 flex items-center justify-center">
              <img
                src="https://scintillating-smakager-860376.netlify.app/images/courses/c2.png"
                alt="img"
                className="w-12 h-12"
              />
            </div>
            <div className="font-bold w-40">
              <h1 className="text-xl">
                Enhancing Adobe Photoshop CC 2024 Skills
              </h1>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
              alt="img"
              className="w-8 h-8 rounded-full"
            />
            <p className="mt-2 text-xs">by Aamin Pathan</p>
          </div>
          <div className="rate flex items-center justify-center text-xs">
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <label className="ml-2">(5.0)</label>
          </div>
          <div className="text-center pt-2">
            <p className="text-sm text-gray-500">35 lectures (130 hrs)</p>
          </div>
          <div className="text-center text-sm">
            <h2>₹35,999 All Course / ₹3000 per month</h2>
          </div>
          <button className="outline-btn mt-4 w-full py-2 border border-gray-500 text-gray-500 rounded hover:bg-[#325843] hover:text-white transition">
            ENROLL NOW!
          </button>
        </div>
        <div className="p-5 font-merienda bg-white rounded-xl shadow-xl">
          <div className="flex gap-3 p-5">
            <div className="bg-[#325843] rounded-full w-20 h-20 flex items-center justify-center">
              <img
                src="https://scintillating-smakager-860376.netlify.app/images/courses/c3.png"
                alt="img"
                className="w-12 h-12"
              />
            </div>
            <div className="font-bold w-40">
              <h1 className="text-2xl">
                HTML, CSS, Javascript for Web Developers
              </h1>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            <img
              src="https://png.pngtree.com/png-clipart/20231020/original/pngtree-avatar-of-a-brunette-man-png-image_13379741.png"
              alt="img"
              className="w-8 h-8 rounded-full"
            />
            <p className="mt-2 text-xs">by Altaf Pathan</p>
          </div>
          <div className="rate flex items-center justify-center text-xs">
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <FaStar className="text-[#325843]" />
            <label className="ml-2">(5.0)</label>
          </div>
          <div className="text-center pt-2">
            <p className="text-sm text-gray-500">56 lectures (220 hrs)</p>
          </div>
          <div className="text-center text-sm">
            <h2>₹59,999 All Course / ₹5000 per month</h2>
          </div>
          <button className="outline-btn mt-4 w-full py-2 border border-gray-500 text-gray-500 rounded hover:bg-[#325843] hover:text-white transition">
            ENROLL NOW!
          </button>
        </div>
      </div>
    </>
  );
}

export default Our;
