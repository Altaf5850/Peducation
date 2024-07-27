import React from "react";
import Contacts from "../components/home/Contacts";

function Contact() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-12 bg-[#7FA896] pt-16 md:pt-32">
      <div className="w-full max-w-4xl mb-10">
        <img
          src="https://st.depositphotos.com/1570716/4101/i/450/depositphotos_41018917-stock-photo-businessman-push-to-contact-us.jpg"
          alt="Contact Us"
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
      <Contacts />
    </div>
  );
}

export default Contact;
