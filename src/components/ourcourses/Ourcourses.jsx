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
  {
    title: "Financial Analysis",
    description: "Learn techniques for analyzing financial statements.",
    image:
      "https://media.licdn.com/dms/image/D4D12AQG_xPanJtNgrQ/article-cover_image-shrink_600_2000/0/1682874000689?e=2147483647&v=beta&t=zpMlKpMSHyRMjIGsbCnjg3dWEDIxUt7nB9rW-tfFCFk",
    category: "Finance",
    price: "₹1299",
  },
  {
    title: "Public Speaking",
    description: "Improve your public speaking and presentation skills.",
    image:
      "https://thumbs.dreamstime.com/b/public-speaking-word-cloud-tag-cloud-isolated-white-public-speaking-word-cloud-tag-cloud-isolated-118873908.jpg",
    category: "Communication",
    price: "₹1199",
  },
  {
    title: "Project Management",
    description: "Master the essentials of project management and leadership.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg",
    category: "Management",
    price: "₹1499",
  },
  {
    title: "Cybersecurity",
    description:
      "Understand the basics of cybersecurity and protect your data.",
    image:
      "https://media.licdn.com/dms/image/D5612AQGCLlLMl0atlg/article-cover_image-shrink_720_1280/0/1700584259771?e=2147483647&v=beta&t=s0XjCXxEtCNtnJqQYM7XMQsuvRPKhn8S_EcPqXVe75w",
    category: "Security",
    price: "₹1799",
  },
  {
    title: "Artificial Intelligence",
    description: "Explore AI concepts and applications in various fields.",
    image:
      "https://bicontent.businessinsurance.com/97c14ec5-699b-482a-9604-0f4785bb9e35.jpg",
    category: "Technology",
    price: "₹1999",
  },
  {
    title: "Cooking Essentials",
    description: "Learn essential cooking techniques and recipes.",
    image:
      "https://images.squarespace-cdn.com/content/v1/55ab2007e4b0d9c287c90dc2/1598461771090-6W3BJ45T0EL4KED9LBB2/1.png",
    category: "Cooking",
    price: "₹799",
  },
  {
    title: "Yoga for Beginners",
    description: "Start your yoga journey with beginner-friendly practices.",
    image:
      "https://www.pspl.org/sites/default/files/styles/large/public/2024-06/YogaforBeginners_calendarimage.jpg",
    category: "Health",
    price: "₹599",
  },
  {
    title: "Interior Design",
    description: "Discover the principles of interior design and decoration.",
    image:
      "https://www.vismayamvfx.com/wp-content/uploads/2021/04/Interior-designing-career-options-and-specialization-800x450.png",
    category: "Design",
    price: "₹1399",
  },
  {
    title: "Blockchain Basics",
    description: "Understand the basics of blockchain technology.",
    image:
      "https://coingeek.com/wp-content/uploads/2020/12/Blockchain-Basics_blog-banner-730x360-copy-min.png",
    category: "Technology",
    price: "₹1899",
  },
  {
    title: "Ethical Hacking",
    description: "Learn ethical hacking techniques to secure systems.",
    image:
      "https://www.eccouncil.org/cybersecurity-exchange/wp-content/uploads/2022/03/ETHICAL-HACKING.jpg",
    category: "Security",
    price: "₹2099",
  },
  {
    title: "Data Visualization",
    description: "Master data visualization techniques using popular tools.",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2021/02/DataVisualizationInfographicsBlogheader.png",
    category: "Data Science",
    price: "₹1699",
  },
  {
    title: "Game Development",
    description: "Get started with game development using Unity.",
    image:
      "https://www.dicazo.com/courses/images/game%20development/game-development%20header.png",
    category: "Development",
    price: "₹2599",
  },
  {
    title: "Video Editing",
    description:
      "Learn video editing techniques using industry-standard software.",
    image:
      "https://t3.ftcdn.net/jpg/05/79/39/50/360_F_579395046_c2dUrmuY1FS2Hfrf8yrc4fnyTJgHdmCl.jpg",
    category: "Multimedia",
    price: "₹1499",
  },
  {
    title: "Business Analytics",
    description: "Explore business analytics techniques and tools.",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/75/80/08/1000_F_75800852_eMvLbcjWmeW3WmpYZsXkH3II2N2nk2vE.jpg",
    category: "Business",
    price: "₹2299",
  },
  {
    title: "Blockchain Technology",
    description:
      "Learn the fundamentals of blockchain technology and its applications.",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1611107541.jpg",
    category: "Technology",
    price: "₹2499",
  },
  {
    title: "Cybersecurity Fundamentals",
    description:
      "Understand the basics of cybersecurity and how to protect your data.",
    image:
      "https://www.eidasolutions.com/wp-content/uploads/2023/03/cyber-new.png",
    category: "Security",
    price: "₹1499",
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-4 bg-white hover:bg-gray-300  transition-all duration-200 ease-in-out">
      <img
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-95"
        src={course.image}
        alt={course.title}
      />
      <div className="px-4 py-3">
        <h2 className="font-bold text-xl mb-2">{course.title}</h2>
        <p className="text-gray-700 text-base mb-2">{course.description}</p>
        <p className="text-gray-900 text-lg font-semibold">{course.price}</p>
      </div>
      <div className="px-4 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #{course.category}
        </span>
      </div>
    </div>
  );
};

const Ourcourses = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 py-12 bg-[#7FA896] pt-10">
      <h1 className="text-3xl font-bold font-merienda text-center text-black mb-4">
        Courses
      </h1>
      <h2 className="text-xl font-bold font-merienda text-center mb-8">
        Browse Our Online Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Ourcourses;
