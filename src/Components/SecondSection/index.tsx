import Button from "@mui/material/Button/Button";
import React from "react";
import writer from "./assets/imgWriter.svg";

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-24">
      <div className="">
        <div className="grid md:grid-cols-2 items-center">
          <div className="flex items-center max-md:justify-center">
            <img src={writer} alt="" className="w-[390px]" />
          </div>
          <div className="flex flex-col text-center ">
            <div className="md:max-w-[520px]">
              <h2 className="text-3xl font-bold text-ourBlue">
                Давно мечтаете выпустить свою книгу?{" "}
              </h2>
              <p className="text-xl text-slate-600 mt-7">
                С нами вы можете начать писать книгу. Наши специальные шаблоны
                помогут вам сделать это быстрее и интереснее
              </p>
              <div>
                <Button type='submit' color="secondary" variant="contained" size="large" sx={{ textTransform: "capitalize", fontWeight: '600', padding: "10px 50px", marginTop: '30px' }}>
                  Написать книгу
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
