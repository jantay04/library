import IconButton from "@mui/material/IconButton/IconButton";
import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../../assets/logo.svg";
import instagramSvg from "./assets/instagram.svg";
import telegramSvg from "./assets/telegram.svg";
import vkSvg from "./assets/vk.svg";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-[#FEF7E8] py-[20px]">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between grid-cols-12 gap-[100px]">
          <div className="max-w-[500px] grid gap-3 text-[#1D324E] text-base font-medium leading-5">
            <div className="flex items-center">
              <img className="h-4 pr-1" src={logoSvg} alt="logo" />{" "}
              <p> - онлайн библиотека.</p>
            </div>
            <p>
              На этом сайте можно бесплатно читать, скачивать, а также обсуждать
              с другими участниками книги.
            </p>
            <p>
              Библиотека действует по принципу вики. Это означает, что
              добавление книг и любой другой информации производится
              пользователями, иногда администрацией.
            </p>
          </div>
          <div className="grid gap-3 text-[#1D324E] text-base font-medium leading-5">
            <Link to="/">Библиотека</Link>
            <Link to="/">Аудиокниги</Link>
            <Link to="/">Блог</Link>
            <Link to="/">Группы</Link>
            <Link to="/">Проекты</Link>
          </div>
          <div className="grid text-[#1D324E] text-base font-medium leading-5">
            <ul className="grid gap-4">
              Контакты
              <li>+996 (990) 885 885</li>
              <li>+996 (990) 886 886</li>
              <li>mybooks@gmail.com</li>
            </ul>
            <div className="-translate-x-2">
              <IconButton>
                <div className="h-8 w-8 flex justify-center items-center">
                  <img src={instagramSvg} alt="socialIcons" className="h-6" />
                </div>
              </IconButton>
              <IconButton>
                <div className="h-8 w-8 flex justify-center items-center">
                  <img src={telegramSvg} alt="socialIcons" className="h-6" />
                </div>
              </IconButton>
              <IconButton>
                <div className="h-8 w-8 flex justify-center items-center">
                  <img src={vkSvg} alt="socialIcons" className="h-6" />
                </div>
              </IconButton>
            </div>
          </div>
        </div>
        <p className="mt-[60px]">
          ©️ 2022 Your books. Все права защищены | Публичная оферта | Политика
          конфиденциальности
        </p>
      </div>
    </div>
  );
}

export default Footer;
