import React from "react";

function Aboout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 font-merienda">
      <div className="p-4 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Academic Excellence
        </h1>
        <p className="p-4 md:p-8 text-center">
          Academic excellence is at the heart of our institution's mission. We
          believe that every student has the potential to achieve greatness, and
          we are committed to providing the resources and support necessary to
          help them reach their full potential. Our curriculum is designed to
          challenge and inspire students, fostering a love for learning that
          extends beyond the classroom.
          <br /> <br />
          We employ a team of dedicated educators who are experts in their
          fields and passionate about teaching. Their innovative teaching
          methods and personalized approach ensure that each student receives
          the attention and guidance they need to succeed. We emphasize critical
          thinking, creativity, and problem-solving skills, preparing our
          students for the challenges of the future.
        </p>
      </div>
      <div className="p-4 md:p-10">
        <img
          src="https://images.pexels.com/photos/3856033/pexels-photo-3856033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Aboout;
