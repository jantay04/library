import React from "react";
import profilePic from "./assets/Ellipse1.svg";
import see from "./assets/see.svg";

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <>
      <div className="flex flex-row lg:w-700 xl:w-500 items-center">
        <img src={profilePic} alt="" />
        <div className="ml-4">
          <h3 className="text-ourBlue text-lg font-normal">Роман Иванов</h3>
          <h2 className="mt-2 text-xl font-semibold">
            Ура! Я прочитал все книги Брайана Трейси! Я просто в восторге!
          </h2>
          <div className="flex flex-row mt-2 justify-between ">
            <p>16 декабря 2022 г.</p>
            <div className="flex flex-row">
              <p>50</p>
              <img src={see} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
