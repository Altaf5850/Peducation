import React from "react";

function Carouse() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 font-merienda">
        <div className="text-center p-8 lg:p-16 bg-[#325843] text-white">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Register now and get a discount{" "}
            <span className="text-red-500">50%</span> discount until 30 July
          </h1>
          <p className="mt-5 text-gray-300 text-lg lg:text-xl">
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum
            nulla, vitae tempo.
          </p>
          <div className="mx-auto mt-6 lg:mt-10 transition duration-200 ease-in-out transform hover:scale-105">
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded">
              register now
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/509109438/photo/defocused-bookstore-background-shelves-with-books.jpg?s=612x612&w=0&k=20&c=GP0Okwq0TCO7bRBQbuxHKw_bieQYPGLnA32vJfc9Zqo=')",
        }}
      >
        <div className="text-center mt-8 p-8 lg:p-16 font-merienda">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            Search for your course
          </h1>
          <form id="search_form" className="space-y-4 px-4 lg:px-10">
            <input
              id="search_form_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              type="text"
              placeholder="Course Name"
              required
              data-error="Course name is required."
            />
            <input
              id="search_form_category"
              className=" w-full px-4 py-2 border border-gray-300 rounded-xl"
              type="text"
              placeholder="Category"
            />
            <input
              id="search_form_degree"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              type="text"
              placeholder="Degree"
            />
            <button
              id="search_submit_button"
              type="submit"
              className="w-full lg:w-52 py-2 bg-blue-500 text-white rounded-md transition duration-200 transform hover:scale-105"
            >
              Search course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Carouse;
