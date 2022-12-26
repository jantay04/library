import React from "react";
// import "./assets/1tabletman"
import tabletMan from "./assets/1tabletman.svg";
import tabletWoman from "./assets/2tabletwoman.svg";
import review from "./assets/review.svg";
import groups from "./assets/groups.svg";

type Props = {};

function MainSections({ }: Props) {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mt-[140px] flex justify-between ">
        <div className="max-lg:hidden flex justify-center items-end">
          <img src={tabletMan} alt="" className="" />
        </div>
        <div className="text-center lg:max-w-[600px] pb-[150px]">
          <h2 className="text-4xl font-bold 600 text-ourBlue">
            Читайте и скачивайте книги бесплатно
          </h2>
          <p className="text-xl text-slate-600 mt-7">
            Библиотека действует по принципу вики. Это означает, что
            добавление книг, авторов и любой другой информации производится
            пользователями
          </p>
          <button
            className="bg-[#FF7F2C] mt-7 py-2 px-4 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200"
          >
            Добавить книгу
          </button>
        </div>
        <div className="max-lg:hidden flex justify-center items-start">
          <img src={tabletWoman} alt=""  className="w-[260px]"/>
        </div>
      </div>
      <div className="my-8">
        <div className=" bg-bejeviy md:flex justify-between  grid min-[500px]:grid-cols-2 px-10 rounded-3xl">
          <div className="flex flex-row items-center  max-[500px]:justify-start  max-md:justify-center py-6">
            <img src={review} alt="" className="mb-1" />
            <h3 className="text-xl ml-2 font-medium text-ourBlue">Блог</h3>
          </div>
          <div className="flex flex-row items-center  max-[500px]:justify-start  max-md:justify-center py-6">
            <img src={review} alt="" className="mb-1" />
            <h3 className="text-xl ml-2 font-medium text-ourBlue">Проекты</h3>
          </div>
          <div className="flex flex-row items-center  max-[500px]:justify-start  max-md:justify-center py-6">
            <img src={review} alt="" className="mb-1" />
            <h3 className="text-xl ml-2 font-medium text-ourBlue">Рецензии</h3>
          </div>
          <div className="flex flex-row items-center  max-[500px]:justify-start  max-md:justify-center py-6">
            <img src={groups} alt="" />
            <h3 className="text-xl ml-2 font-medium text-ourBlue">Мероприятия</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSections;
