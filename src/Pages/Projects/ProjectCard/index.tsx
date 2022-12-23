import React from "react";

const ProjectCard = (props: any) => {
  return (
    <div className="w-700 h-auto ">
      <div className="flex items-center flex-col">
        <img src={props.item.img} className="w-full" />
        <h1 className="font-bold text-3xl text-ourOrange ">
          {props.item.name}
        </h1>
      </div>
      <div className="mt-5">
        <p className="font-extrabold text-xl text-ourBlue">
          {props.item.title}
        </p>
      </div>
      <div className="w-full mt-5 flex flex-col items-center ">
        <p className="text-xl text-gray-500">{props.item.text}</p>
        <button className="bg-ourOrange cursor-pointer text-white w-60 h-12 rounded-lg text-xl mt-16 hover:bg-orange-600 transition-colors">
          Учавствовать
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
