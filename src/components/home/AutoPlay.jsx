import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/3/32/Amazon_logo._CB635397845.png",
    "https://thumbs.dreamstime.com/b/flipkart-logo-editorial-illustrative-white-background-flipkart-logo-editorial-illustrative-white-background-eps-download-208332209.jpg",
    "https://thumbs.dreamstime.com/z/sony-logo-vector-white-background-editorial-illustrative-social-media-206665969.jpg",
    "https://www.infinite.com/wp-content/uploads/2023/04/Google.png",
    "https://www.infinite.com/wp-content/uploads/2023/04/Microsoft.png",
    "https://s3-alpha.figma.com/hub/file/5388452724/888ad143-5a02-49cc-8642-f94240b67589-cover.png",
  ];

  return (
    <div className="mx-auto w-full bg-white overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-200 h-20 flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
