import React from "react";
import see from "../../../Components/ThirdSection/ProfileCard/assets/see.svg";
import { Link } from "react-router-dom";

const ReviewCard = (props: any) => {
  return (
    <div className="flex flex-row lg:w-700 xl:w-500 items-center mt-10 0 h-40  ">
      <img src={props.item.img} alt="" />
      <div className="ml-4 flex flex-col b36  w-52">
        <h3 className="text-ourBlue text-lg font-normal ">{props.item.name}</h3>
        <Link
          className="mt-1 text-lg font-semibold w-56  flex-auto    hover:text-ourOrange   hover:underline transition-opacity   whitespace-pre overflow-hidden p-2 text-ellipsis "
          to="#">
          {props.item.comment}
        </Link>
        <div className="flex flex-row mt-2 justify-between items-end h-full">
          <p>{props.item.dateOfReview}</p>
          <div className="flex flex-row">
            <p>{props.item.see}</p>
            <img src={see} alt="No profile img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
