import React from "react";
import womanJumping from "./assets/womanJumping.svg";

type Props = {};

const FouthSection = (props: Props) => {
  return (
    <>
      <div className="flex justify-center mt-24">
        {/* 1440-768px start */}
        <div className="hidden md:block w-86">
          <div className="flex flex-row justify-around">
            <div className="text-center w-610 ">
              <h2 className="text-4xl font-bold 600 text-ourBlue">
                Хотите прочесть 12 книг за 1 год?
              </h2>
              <p className="text-xl text-slate-600 mt-7">
                Тогда участвуйте в нашем челлендже “КНИГОМАН”. С помощью нашей
                таблицы, вы достигнете своей цели
              </p>
              <button className="bg-[#FF7F2C] mt-7 py-2 px-4 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200">
                Подробнее
              </button>
            </div>
            <div>
              <img src={womanJumping} alt="" className="w-80 " />
            </div>
          </div>
        </div>
        {/* img 1440-768px end */}
        {/* img 768px  start */}
        <div className="flex md:hidden">
          <div className="flex w-86 flex-col justify-evenly">
            <div className="text-center w-610 ">
              <h2 className="text-4xl font-bold 600 text-ourBlue">
                Хотите прочесть 12 книг за 1 год?
              </h2>
              <p className="text-xl text-slate-600 mt-7">
                Тогда участвуйте в нашем челлендже “КНИГОМАН”. С помощью нашей
                таблицы, вы достигнете своей цели
              </p>
              <button className="bg-[#FF7F2C] mt-7 py-2 px-4 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200">
                Подробнее
              </button>
            </div>
            <div>
              <img src={womanJumping} alt="" className="w-80 " />
            </div>
          </div>
        </div>
        {/* img 768px end */};
      </div>
      {/* import profilePic from "./assets/Ellipse1.svg";
import see from "./assets/see.svg";
    <div className="flex flex-row lg:w-700 xl:bg-slate-800 xl:w-500 lg:bg-amber-700 items-center">
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
    </div> */}
    </>
  );
};

export default FouthSection;
