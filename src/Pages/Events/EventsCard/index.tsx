import React from "react";

import iconEvent from "../EventsCard/assets/event_available.svg";
import iconSchedule from "../EventsCard/assets/schedule.svg";
import iconLocation from "../EventsCard/assets/location_on.svg";
import Slider from "react-slick";

const EventsCard = (props: any) => {
  return (
    <div className=" w-95 ml-6">
      {/* <Slider {...settings}> */}
      <img src={props.item.img} className="w-full h-auto" />
      <div color="">
        <h1 className="text-ourOrange font-extrabold  text-xl leading-loose">
          {props.item.name}
        </h1>
        <div className=" flex items-center justify-between w-64">
          <div className="flex text-ourBlue font-extrabold text-base">
            <img src={iconEvent} className="mr-2" />
            {props.item.date}
          </div>
          <div className="flex text-ourBlue font-extrabold text-base">
            <img src={iconSchedule} className="mr-2" />
            {props.item.time}
          </div>
        </div>
        <div className="flex text-ourBlue font-extrabold text-base mt-5">
          <img src={iconLocation} className="mr-2" />
          {props.item.adress}
        </div>
      </div>
      <div className="w-full mt-7 h-32">
        <p className="font-medium text-gray-500 text-sm leading-none">
          {props.item.text}
        </p>
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default EventsCard;
