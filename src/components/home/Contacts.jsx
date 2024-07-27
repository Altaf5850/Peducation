import React from "react";
import Swal from "sweetalert2";

function Contacts() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "your_access_key_here");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success",
      });
      event.target.reset();
    }
  };

  return (
    <section className="py-10 px-4 md:px-10 lg:px-20 bg-white mx-auto w-full max-w-2xl shadow-md border rounded-xl font-merienda m-5">
      <form
        onSubmit={onSubmit}
        className="text-center text-black px-4 md:px-8 lg:px-16"
      >
        <h2 className="text-2xl font-semibold">
          Contact <span className="text-[#46a06e]">Our Team</span>
        </h2>
        <p className="text-gray-500 mt-3 text-lg">Get in touch</p>
        <div className="my-4 flex flex-col">
          <label className="mb-2 text-start">FULL NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-2 rounded-xl border border-gray-600"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label className="mb-2 text-start">EMAIL ADDRESS</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-2 rounded-xl border border-gray-600"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label className="mb-2 text-start">MESSAGE</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className="p-2 rounded-xl border border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-10 rounded-xl m-3 bg-[#46a06e] hover:text-black hover:bg-transparent hover:scale-90 duration-200 ease-in-out"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contacts;
