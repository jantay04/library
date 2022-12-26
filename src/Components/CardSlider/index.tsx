import React from "react";
import Slider from "react-slick";

import gg from "../MainSectoins/assets/1tabletman.svg";
import "../../style/Slider.css";
import Card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const MainSlider = ({ }: Props) => {
  const settings = {
    slidesToShow: 6,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    // autoplaySpeed: 100,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <div className="w-[99%] ">
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
