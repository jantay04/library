import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gg from "../MainSectoins/assets/1tabletman.svg";
import "../../style/Slider.css";
import Card from "../Card";

type Props = {};

const MainSlider = ({}: Props) => {
  const settings = {
    className: "ml-56 ",
    slidesToShow: 7,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          className: "ml-44 ",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          className: "ml-32 ",
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
          className: "ml-20 ",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          className: "ml-24 ",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          className: "ml-20 ",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          className: "ml-16 ",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          className: "ml-12 ",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          className: "ml-24 mr-1",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          className: "mx-12 ",
        },
      },
    ],
  };
  return (
    <div className="mb-10">
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
  );
};

export default MainSlider;
