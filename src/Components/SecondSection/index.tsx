import React from "react";
import writer from "./assets/imgWriter.svg";

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <div className="flex justify-center mt-24">
      {/* 1440-768px start */}
      <div className="hidden md:block w-86">
        <div className="flex flex-row justify-around">
          <div>
            <img src={writer} alt="" className="w-80 " />
          </div>
          <div className="text-center w-610 ">
            <h2 className="text-4xl font-bold 600 text-ourBlue">
              Давно мечтаете выпустить свою книгу?{" "}
            </h2>
            <p className="text-xl text-slate-600 mt-7">
              С нами вы можете начать писать книгу. Наши специальные шаблоны
              помогут вам сделать это быстрее и интереснее
            </p>
            <button className="bg-[#FF7F2C] mt-7 py-2 px-4 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200">
              Написать книгу
            </button>
          </div>
        </div>
      </div>
      {/* img 1440-768px end */}

      {/* img 768px  start */}
      <div className="flex md:hidden">
        <div className="flex w-86 flex-col justify-evenly">
          <div>
            <img src={writer} alt="" className="w-80 " />
          </div>

          <div className="text-center w-610 ">
            <h2 className="text-4xl font-bold 600 text-ourBlue">
              Давно мечтаете выпустить свою книгу?{" "}
            </h2>
            <p className="text-xl text-slate-600 mt-7">
              С нами вы можете начать писать книгу. Наши специальные шаблоны
              помогут вам сделать это быстрее и интереснее
            </p>
            <button className="bg-[#FF7F2C] mt-7 py-2 px-4 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200">
              Написать книгу
            </button>
          </div>
        </div>
      </div>
      {/* img 768px end */}
    </div>
  );
};

export default SecondSection;
