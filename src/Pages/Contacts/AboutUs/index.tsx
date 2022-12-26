import React from "react";
import MainLayout from "../../../Components/Layout/MainLayout";
import BreadCrumb from "../../../Components/BreadCrumb";
import inst from "./assets/instagram.svg";
import tg from "./assets/telegram.svg";
import vk from "./assets/vk.svg";
import { Link } from "react-router-dom";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-4">
        <BreadCrumb />
        <div className="text-ourBlue text-xl font-medium mt-5 text-base">
          <h1 className="font-extrabold text-3xl text-ourBlue">O HAC</h1>
          <p className="mt-4">
            <span className="font-bold ">Your</span>
            <span className="font-bold text-ourOrange ml-1 mr-1">Books</span>
            - онлайн библиотека.</p>

          <p className="mt-6">
            На этом сайте можно бесплатно читать, скачивать, а также обсуждать с
            другими участниками книги.
          </p>
          <p className="mt-6">
            Библиотека действует по принципу вики. Это означает, что добавление
            книг и любой другой информации производится пользователями, иногда
            администрацией.
          </p>
          <p className="mt-6">
            Таким образом, внедрение современных методик предопределяет высокую
            востребованность дальнейших направлений развития. Не следует,
            однако, забывать, что повышение уровня гражданского сознания, в
            своём классическом представлении, допускает внедрение как
            самодостаточных, так и внешне зависимых концептуальных решений.
            Таким образом, внедрение современных методик предопределяет высокую
            востребованность дальнейших направлений развития. Не следует,
            однако, забывать, что повышение уровня гражданского сознания, в
            своём классическом представлении, допускает внедрение как
            самодостаточных, так и внешне зависимых концептуальных решений.{" "}
          </p>
          <p className="mt-6">
            Таким образом, внедрение современных методик предопределяет высокую
            востребованность дальнейших направлений развития. Не следует,
            однако, забывать, что повышение уровня гражданского сознания, в
            своём классическом представлении, допускает внедрение как
            самодостаточных, так и внешне зависимых концептуальных решений.
            Таким образом, внедрение современных методик предопределяет высокую
            востребованность дальнейших направлений развития. Не следует,
            однако, забывать, что повышение уровня гражданского сознания, в
            своём классическом представлении, допускает внедрение как
            самодостаточных, так и внешне зависимых концептуальных решений.{" "}
          </p>
          <div className="mt-8">
            <h2 className="mt-3">Контакты:</h2>
            <h2 className="mt-3">+996 (990) 885 885</h2>
            <h2 className="mt-3">+996 (990) 886 886</h2>
            <h2 className="mt-3">yourbooks@gmail.com</h2>
          </div>
          <div className="mt-8">
            <h2 className="mt-3">Мы в соц. сетях:</h2>
            <div className="flex flex-row items-center mt-3">
              <img src={inst} alt="" className="w-6 h-6" />
              <h2 className="ml-2">@yourbooks</h2>
            </div>
            <div className="flex flex-row items-center mt-3">
              <img src={tg} alt="" className="w-6 h-6" />
              <h2 className="ml-2">@yourbooks</h2>
            </div>
            <div className="flex flex-row items-center mt-3">
              <img src={vk} alt="" className="w-6 h-6" />
              <h2 className="ml-2">@yourbooks</h2>
            </div>
          </div>
          <div className="text-xl font-medium flex flex-col my-8">
            <Link to="/law" className="mt-3">
              Все права защищены
            </Link>
            <Link to="/publicoffer" className="mt-3">
              Публичная оферта
            </Link>
            <Link to="/privacypolicy" className="mt-3">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
