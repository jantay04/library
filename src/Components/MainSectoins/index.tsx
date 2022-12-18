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
      {/* min width 1024px main section block start */}
      <div className="flex justify-center">
        <div className=" justify-between mt-40 w-86 hidden lg:flex">
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
          <div className="-mt-12">
            <img src={tabletWoman} alt="" />
          </div>
        </div>
      </div>

      <div className=" justify-center my-8 hidden lg:flex">
        <div className="w-86  h-24 bg-bejeviy flex justify-around rounded-3xl">
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
      {/* min width 1024px main section block end */}

      {/* max width 1024px main section block start */}
      <div className="hidden lg:hidden md:block">
        <div className="flex justify-evenly mt-20 w-900">
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
          <img src={tabletWoman} alt="" className="-mr-24" />
        </div>
        <div className="flex justify-evenly mt-20 ">
          <img src={tabletMan} alt="" />
          <div className="text-center w-610 ">
            <h2 className="text-4xl font-bold 600 text-ourBlue">
              У нас собраны популярные книги из всех точек мира!
            </h2>
            <p className="text-xl text-slate-600 mt-7">
              Читай книги в любом месте на любом устройстве!
            </p>
          </div>
        </div>
      </div>

      <div className="hidden justify-center my-8 lg:hidden md:flex">
        <div className="w-86  h-32 bg-bejeviy flex justify-around  rounded-3xl">
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-row items-center">
              <img src={review} alt="" className="mb-1" />
              <h3 className="text-xl ml-1 font-bold text-ourBlue">Блог</h3>
            </div>
            <div className="flex flex-row items-center">
              <img src={review} alt="" className="mb-1" />
              <h3 className="text-xl ml-1 font-bold text-ourBlue">Проекты</h3>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-row items-center">
              <img src={review} alt="" className="mb-1" />
              <h3 className="text-xl ml-1 font-bold text-ourBlue">Рецензии</h3>
            </div>
            <div className="flex flex-row items-center">
              <img src={groups} alt="" />
              <h3 className="text-xl ml-1 font-bold text-ourBlue">
                Мероприятия
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* max width 1024px main section block end */}

      {/* min width 420px main section block start */}

      <div className="block md:hidden">
        <div className="flex justify-evenly mt-20">
          <div className="text-center w-850 ">
            <h2 className="text-4xl font-bold 600 text-ourBlue">
              Читайте и скачивайте книги бесплатно
            </h2>
            <p className="text-xl text-slate-600 mt-7">
              Библиотека действует по принципу вики. Это означает, что
              добавление книг, авторов и любой другой информации производится
              пользователями
            </p>
            <button className="bg-[#FF7F2C] mt-7 py-2 px-4 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200">
              Добавить книгу
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={tabletWoman} alt="" />
        </div>

        <div className="flex justify-evenly mt-20">
          <div className="text-center w-850 ">
            <h2 className="text-4xl font-bold 600 text-ourBlue">
              У нас собраны популярные книги из всех точек мира!
            </h2>
            <p className="text-xl text-slate-600 mt-7">
              Читай книги в любом месте на любом устройстве!
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <img src={tabletMan} alt="" />
        </div>
      </div>

      <div className="justify-center my-8 hidden sm:flex md:hidden">
        <div className="w-86  h-32 bg-bejeviy flex justify-around  rounded-3xl">
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-row items-center">
              <img src={review} alt="" className="mb-1" />
              <h3 className="text-xl ml-1 font-bold text-ourBlue">Блог</h3>
            </div>
            <div className="flex flex-row items-center">
              <img src={review} alt="" className="mb-1" />
              <h3 className="text-xl ml-1 font-bold text-ourBlue">Проекты</h3>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-row items-center">
              <img src={review} alt="" className="mb-1" />
              <h3 className="text-xl ml-1 font-bold text-ourBlue">Рецензии</h3>
            </div>
            <div className="flex flex-row items-center">
              <img src={groups} alt="" />
              <h3 className="text-xl ml-1 font-bold text-ourBlue">
                Мероприятия
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* min width 420px main section block end */}

      {/* min width 375px main section block start */}

      <div className="justify-center my-8 flex md:hidden">
        <div className="w-86 h-60 bg-bejeviy flex justify-around  rounded-3xl">
          <div className="flex flex-col justify-evenly">
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
              <h3 className="text-xl ml-1 font-bold text-ourBlue">
                Мероприятия
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* min width 375px main section block end */}
    </>
  );
}

export default MainSections;
