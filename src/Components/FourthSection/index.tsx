import Button from "@mui/material/Button/Button";
import React from "react";
import womanJumping from "./assets/womanJumping.svg";

type Props = {};

const FouthSection = (props: Props) => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-4 my-24">
        <div className="">
          <div className="grid  md:grid-cols-2  items-center">
            <div className="flex flex-col text-center items-center  max-md:order-last">
              <h2 className="text-3xl font-bold text-ourBlue md:max-w-[520px]">
                Хотите прочесть 12 книг за 1 год?
              </h2>
              <p className="text-xl text-slate-600 mt-7">
                Тогда участвуйте в нашем челлендже “КНИГОМАН”. С помощью нашей
                таблицы, вы достигнете своей цели
              </p>
              <div>
                <Button type='submit' color="secondary" variant="contained" size="large" sx={{ textTransform: "capitalize", fontWeight: '600', padding: "10px 50px", marginTop: '30px' }}>
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end items-center">
              <img src={womanJumping} alt="" className="w-[410px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FouthSection;
