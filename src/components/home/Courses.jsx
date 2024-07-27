import React from "react";

const courses = [
  {
    title: "React Basics",
    description:
      "Learn the basics of React and build dynamic web applications.",
    image:
      "https://media.licdn.com/dms/image/D4E12AQFAnM7JNyFDQg/article-cover_image-shrink_720_1280/0/1708148800306?e=2147483647&v=beta&t=YVyEgQPbE7DUjDtMEQ5DBs_NUxWX_z6mWn72IqCH03Q",
    category: "Web Development",
    price: "₹999",
  },
  {
    title: "Advanced CSS",
    description: "Master advanced CSS techniques for responsive design.",
    image:
      "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feaiq75g0455ty75m7dbo.png",
    category: "Web Design",
    price: "₹1299",
  },
  {
    title: "JavaScript Essentials",
    description: "Understand the fundamentals of JavaScript programming.",
    image: "https://img-c.udemycdn.com/course/750x422/1468694_d595_2.jpg",
    category: "Programming",
    price: "₹1199",
  },
  {
    title: "Python for Beginners",
    description:
      "Get started with Python programming and build simple projects.",
    image: "https://i.ytimg.com/vi/jCkk9ojr3BM/maxresdefault.jpg",
    category: "Programming",
    price: "₹999",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Learn key data structures and algorithms for efficient coding.",
    image:
      "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg",
    category: "Computer Science",
    price: "₹1499",
  },
  {
    title: "Machine Learning",
    description: "An introduction to machine learning concepts and techniques.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*cG6U1qstYDijh9bPL42e-Q.jpeg",
    category: "Data Science",
    price: "₹1999",
  },
  {
    title: "Digital Marketing",
    description: "Learn digital marketing strategies for online success.",
    image:
      "https://etimg.etb2bimg.com/thumb/msid-89866356,imgsize-86880,width-1200,height=765,overlay-etbrandequity/blog/top-5-digital-marketing-trends.jpg",
    category: "Marketing",
    price: "₹899",
  },
  {
    title: "Graphic Design",
    description:
      "Discover the principles of graphic design and visual communication.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKS7R1XQdMfzRclUfRrxUaTjuCbltxMM9mg&s",
    category: "Design",
    price: "₹1099",
  },
  {
    title: "Photography Basics",
    description:
      "Explore the fundamentals of photography and improve your skills.",
    image:
      "https://media.licdn.com/dms/image/C4D12AQHi_tLUFuTXvQ/article-cover_image-shrink_720_1280/0/1520077840074?e=2147483647&v=beta&t=vPK-uK3VwiOqLtnYcaZnZ-_bo5K88Vsc3A5cU_vnjYE",
    category: "Photography",
    price: "₹1199",
  },
  {
    title: "Mobile App Development",
    description: "Build and deploy mobile applications for Android and iOS.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrAi504mLSXUO7_zg1Lyyo7lQLLXkt7jnzPQ&s",
    category: "Mobile Development",
    price: "₹1599",
  },
  {
    title: "SEO Optimization",
    description: "Optimize your website for better search engine rankings.",
    image:
      "https://www.rgbwebtech.com/blogs/images/uploads/what-is-seo-search-engin-optimization.png",
    category: "SEO",
    price: "₹999",
  },
  {
    title: "Content Writing",
    description: "Enhance your writing skills for online content creation.",
    image:
      "https://st2.depositphotos.com/5501600/8615/i/950/depositphotos_86157576-stock-illustration-content-writer-concept-image-wrriten.jpg",
    category: "Writing",
    price: "₹899",
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white hover:bg-gray-300 duration-200 ease-in hover:text-Black font-merienda">
      <img
        className="w-full h-48 object-cover hover:scale-95 ease-in duration-300"
        src={course.image}
        alt={course.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <p className="text-gray-700 text-base">{course.description}</p>
        <p className="text-gray-900 text-lg font-semibold mt-2">
          {course.price}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{course.category}
        </span>
      </div>
    </div>
  );
};

const CourseList = () => {
  return (
    <>
      <h1 className="text-3xl font-bold font-merienda text-center text-[#4ec483] mt-4">
        Courses
      </h1>
      <h1 className="text-xl font-bold font-merienda text-center pt-4">
        Browse Our Online Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </>
  );
};

export default CourseList;
