import { Fragment, useState } from "react";
import logoSvg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import HeaderModal from "./HeaderModal";
import SearchHeader from "../../UI/SearchHeader";

type Props = {};

const linksLists = [
  {
    id: 1,
    tittle: "Главная",
    url: "/",
  },
  {
    id: 2,
    tittle: "Библиотека",
    url: "/library",
  },
  {
    id: 3,
    tittle: "Контакты",
    url: "/contacts",
  },
];

function Header({}: Props) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logoSvg} alt="logo" className="h-5" />
          </Link>
          <SearchHeader />
          <div className="flex gap-4 ">
            {linksLists &&
              linksLists.map((item) => (
                <Link
                  to={item.url}
                  className="font-semibold p-1 border-b border-black/0  hover:border-b  hover:border-[#FF7F2C] hover:text-[#FF7F2C] ease-in-out duration-200">
                  {item.tittle}
                </Link>
              ))}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#FF7F2C] py-2 px-4 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200">
            Войти
          </button>
        </div>
      </div>
      <HeaderModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Header;
