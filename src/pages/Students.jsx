import React from "react";

function Students() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-12 bg-[#7FA896] pt-24 md:pt-32">
      <div className="relative w-full max-w-5xl mb-10">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5e020def4e2917000783d582/Multi-ethnic-students-sitting-at-college-library/960x0.jpg?format=jpg&width=960"
          alt="Education Background"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white p-4 md:p-10 font-merienda text-center">
            OUR STUDENTS
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8 font-merienda">
        <div className="p-4 md:p-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Clubs & Activities</h1>
          <p className="text-base md:text-lg w-full md:w-3/4 mx-auto pt-3">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. ​ <br /> <br />
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your own company.
          </p>
        </div>
        <div className="w-full">
          <img
            src="https://static.wixstatic.com/media/2e2a49_cc3a06d2ea134a79ab20602e3fd7caa3~mv2.jpg/v1/fill/w_851,h_814,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_cc3a06d2ea134a79ab20602e3fd7caa3~mv2.jpg"
            alt="img"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>
        <div className="w-full">
          <img
            src="https://static.wixstatic.com/media/2e2a49_9ec1caa9b08c437fb9a316b66155faa6~mv2.jpg/v1/fill/w_850,h_814,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_9ec1caa9b08c437fb9a316b66155faa6~mv2.jpg"
            alt="img"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>
        <div className="p-4 md:p-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">After School</h1>
          <p className="text-base md:text-lg w-full md:w-3/4 mx-auto pt-3">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. ​<br />
            <br />
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your own company.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Students;
