import React from "react";
import Aboout from "../components/about/aboout";
import Aabout from "../components/about/Aabout";
import SubscribeForm from "../components/about/SubscribeForm";

function About() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-12 bg-[#7FA896] pt-32">
      <div className="relative w-full max-w-5xl mb-10">
        <img
          src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=sph"
          alt="Education Background"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white p-6 md:p-10 font-merienda text-center">
            About Our PEducation
          </h1>
        </div>
      </div>
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg font-merienda">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 mb-6">
          At our company, we are committed to empowering individuals through
          education. Our mission is to provide top-quality educational resources
          and experiences that inspire and equip learners to achieve their full
          potential. We believe in fostering a love of learning, encouraging
          critical thinking, and promoting lifelong education. Our goal is to
          create an inclusive, innovative, and supportive environment where
          every student can thrive.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          1. Excellence: We strive to provide the highest quality education and
          resources to empower our students to achieve their full potential.{" "}
          <br />
          2.Integrity: Honesty and transparency are at the heart of our
          operations. We believe in doing the right thing, even when no one is
          watching. <br />
          3.Innovation: We embrace new ideas and technologies to continually
          improve our educational offerings and stay ahead in a rapidly evolving
          field. <br />
          4.Inclusivity: We are committed to creating an inclusive and diverse
          learning environment where everyone feels welcome and valued. <br />
          5.Customer Focus: Our students and their success are our top priority.
          We are dedicated to meeting their needs and exceeding their
          expectations. <br />
          6.Collaboration: We believe in the power of teamwork and partnership,
          both within our organization and with the broader educational
          community. <br />
          7.Lifelong Learning: We encourage continuous learning and growth, not
          just for our students but for our staff and the community as a whole.
        </ul>
      </div>
      <Aboout />
      <Aabout />
      <SubscribeForm />
    </div>
  );
}

export default About;
