import React from "react";
import Slider from "react-slick";
import { SiReact, SiMongodb, SiPostgresql, SiApachekafka, SiSpringboot, SiExpress, } from "react-icons/si";
import {
  DiNodejs,
  DiGit,
  DiJava
} from "react-icons/di";
import { FaAws } from "react-icons/fa";



const TechCarousel = () => {
  const settings = {
    arrows: false,     // removes arrows
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,  // Number of tech icons visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // seamless effect
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const techs = [
    <FaAws size={70} color="#545457ff" />,
    <SiSpringboot size={70} color="#697f59ff" />,
    <SiExpress size={70} color="#888888ff" />,
    <SiMongodb size={70} color="#2c522cff" />,
    <SiPostgresql size={70} color="#314d65ff" />,
    <SiReact size={70} color="#548693ff" />,
    <SiApachekafka size={70} color="#373132ff" />,
    <DiNodejs size={70} color="#658048ff" />,
    <DiJava size={70} color="#405867ff" />,
    <DiGit size={70} color="#a15d4fff" />,
    // add more tech icons here
  ];

  return (
    <Slider {...settings}>
      {techs.map((icon, idx) => (
        <div key={idx} style={{ textAlign: "center", padding: "5px" }}>
          {icon}
        </div>
      ))}
    </Slider>
  );
};

export default TechCarousel;
