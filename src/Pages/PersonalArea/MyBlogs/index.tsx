import React, { useEffect, useState } from "react";
import PersonalSidebarLayout from "../../../Components/PersonalAreaLayout";
import Card from "../../../Components/Card";
import { useNavigate } from "react-router-dom";

type Props = {};

function MyBooks({}: Props) {
  // Здесь потом книги будут
  const [personalBooks, setPersonalBooks] = useState<any | null>(true);

  const navigate = useNavigate();

  return (
    <PersonalSidebarLayout>
      {personalBooks && personalBooks ? (
        <div className="flex justify-center  flex-col items-center">
          <div className="flex justify-evenly">
            <Card small />
            <Card small />
            <Card small />
          </div>
          <div className=" text-center mt-10 mb-10">
            <h3 className="text-ourBlue font-bold text-2xl">Отлично!</h3>
            <p className="text-base text-ourBlue mt-6">
              Может желаете еще добавить? :)
            </p>
            <button
              className="w-44 h-9  border-2 border-ourOrange bg-transparent rounded-lg font-bold text-ourOrange text-sm mt-7"
              onClick={() => navigate("/personalarea/mybooks/addBooks")}>
              Добавить книгу
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center  flex-col items-centermt-20">
          <div className=" text-center mt-10 mb-10">
            <h3 className="text-ourBlue font-bold text-2xl">
              Ничего не найдено
            </h3>
            <p className="text-base text-ourBlue mt-6">
              Вы пока не добавили ни одной книги :(
            </p>
            <button
              onClick={() => navigate("/personalarea/mybooks/addBooks")}
              className="w-44 h-9  border-2 border-ourOrange bg-transparent rounded-lg font-bold text-ourOrange text-sm mt-7 transition-colors hover:bg-gray-100">
              Добавить книгу
            </button>
          </div>
        </div>
      )}
    </PersonalSidebarLayout>
  );
}

export default MyBooks;
