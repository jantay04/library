import React from "react";
// import "./assets/1tabletman"
import tabletMan from "./assets/1tabletman.svg";
import tabletWoman from "./assets/2tabletwoman.svg";
import review from "./assets/review.svg";
import groups from "./assets/groups.svg";

type Props = {};

function MainSections({}: Props) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-between mt-40 w-86">
          <div>
            <img src={tabletMan} alt="" className="mt-28" />
          </div>
          <div className="text-center w-610 ">
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
              // className="text-white bg-orange-500 mt-7 px-6 py-1 rounded-md shadow-bottom"
            >
              Добавить книгу
            </button>
          </div>
          <img src={tabletWoman} alt="" className="-mt-36" />
        </div>
      </div>
      <div className="flex justify-center my-8">
        <div className="w-86 h-24 bg-bejeviy flex justify-around rounded-3xl">
          <div className="flex flex-row items-center">
            <img src={review} alt="" className="mb-1" />
            <h3 className="text-xl ml-1 font-bold text-ourBlue">Блог</h3>
          </div>
          <div className="flex flex-row items-center">
            <img src={review} alt="" className="mb-1" />
            <h3 className="text-xl ml-1 font-bold text-ourBlue">Проекты</h3>
          </div>
          <div className="flex flex-row items-center">
            <img src={review} alt="" className="mb-1" />
            <h3 className="text-xl ml-1 font-bold text-ourBlue">Рецензии</h3>
          </div>
          <div className="flex flex-row items-center">
            <img src={groups} alt="" />
            <h3 className="text-xl ml-1 font-bold text-ourBlue">Мероприятия</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSections;
