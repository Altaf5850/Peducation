import React from "react";

function Teacher() {
  const teachers = [
    {
      name: "Humera Pathan",
      role: "Software Engineering",
      image:
        "https://cdn3d.iconscout.com/3d/premium/thumb/muslim-female-wear-face-mask-5229583-4385799.png",
      bio: "Humera Pathan is a passionate software engineer with over 5 years of experience in the industry. She specializes in introducing students to the fundamentals of software engineering, making complex concepts accessible and engaging.",
    },
    {
      name: "Altaf Pathan",
      role: "Web Developer",
      image:
        "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
      bio: "Altaf Pathan is a skilled web developer with a passion for creating dynamic and user-friendly websites. He has extensive experience in frontend and backend development, specializing in technologies like React, Node.js, and MongoDB.",
    },
    {
      name: "Aamin Pathan",
      role: "Enhancing Adobe Photoshop",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
      bio: "Aamin Pathan is an expert in Adobe Photoshop CC 2024 with a focus on enhancing digital imaging skills. With a background in graphic design and photography, Aamin is dedicated to teaching advanced techniques in Photoshop, empowering students to create stunning visual content.",
    },
    {
      name: "Sarah Johnson",
      role: "Digital Marketing",
      image:
        "https://thumbs.dreamstime.com/b/d-icon-cute-young-avatar-business-woman-office-worker-stands-holds-work-documents-folder-people-character-illustration-282239476.jpg",
      bio: "Sarah Johnson is a seasoned digital marketer with a passion for driving online engagement and brand growth. With years of experience in social media management, SEO, and content strategy, Sarah specializes in creating effective digital campaigns that resonate with target audiences.",
    },
  ];

  return (
    <div className="bg-white pt-5">
      <div className="container mx-auto font-merienda">
        <div className="text-center pb-2">
          <p className="px-5">
            <span className="px-2 text-2xl font-extrabold">Our Teachers</span>
          </p>
          <h1 className="mb-4 pt-7 text-xl font-bold underline">
            Meet Our Teachers
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 text-center mb-5 px-4"
            >
              <div className="relative overflow-hidden mb-4 rounded-full">
                <img
                  className="w-full h-auto rounded-full"
                  src={teacher.image}
                  alt={teacher.name}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  <a
                    className="text-center mr-2"
                    style={{ width: 38, height: 38 }}
                    href="#"
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a
                    className="text-center mr-2"
                    style={{ width: 38, height: 38 }}
                    href="#"
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a
                    className="text-center"
                    style={{ width: 38, height: 38 }}
                    href="#"
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                </div>
              </div>
              <h4 className="text-lg font-bold">{teacher.name}</h4>
              <i className="block text-gray-600">{teacher.role}</i>
              <p className="text-sm mt-2 px-2">{teacher.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teacher;
