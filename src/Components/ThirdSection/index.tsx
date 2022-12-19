import React from "react";
import ProfileCard from "./ProfileCard/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const index = (props: Props) => {
  const settings = {
    className: " ",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          //   className: "ml-20 ",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          //   className: "ml-0 ",
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="xl:ml-44 lg:ml-24 mt-24">
      <h2 className="text-ourBlue font-bold text-xl">
        Блоги читателей и авторов
      </h2>

      <Slider {...settings}>
        <div className=" flex flex-col justify-between">
          <ProfileCard />
          <div className="mt-aa10">
            <ProfileCard />
          </div>
        </div>
        <div className=" flex flex-col justify-between">
          <ProfileCard />
          <div className="mt-aa10">
            <ProfileCard />
          </div>
        </div>{" "}
        <div className=" flex flex-col justify-between">
          <ProfileCard />
          <div className="mt-aa10">
            <ProfileCard />
          </div>
        </div>{" "}
        <div className=" flex flex-col justify-between">
          <ProfileCard />
          <div className="mt-aa10">
            <ProfileCard />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default index;
