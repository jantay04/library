import { useState } from "react";
import logoSvg from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import HeaderModal from "./HeaderModal";
import SearchHeader from "../../../UI/SearchHeader";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton/IconButton";

import Hamburger from "./Hamburger";
type Props = {};

type LinksComponentProps = {
  id?: number;
  tittle: string;
  url?: string;
  urls?: Array<{
    id: number,
    tittle: string,
    url: string;
  }>
};


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
    urls: [
      {
        id: 1,
        tittle: "О нас",
        url: "/aboutus"
      },
      {
        id: 2,
        tittle: "Все права защищены",
        url: "/law"
      },
      {
        id: 3,
        tittle: "Политика конфиденциальности",
        url: "/privacypolicy"
      },
      {
        id: 3,
        tittle: "Публичная оферта",
        url: "/publicoffer"
      },
      {
        id: 4,
        tittle: "Проекты",
        url: "/projects"
      },
    ],
  },
];

function Header({ }: Props) {

  let [isOpenModal, setIsOpenModal] = useState(false);

  const [openHamburger, setOpenHamburger] = useState(false)

  const LinksComponent = ({ id, tittle, url, urls }: LinksComponentProps) => {
    return (
      <>
        {url ?
          <Link
            to={url}
            className="font-semibold p-1 border-b border-black/0  hover:border-b  hover:border-[#FF7F2C] hover:text-[#FF7F2C] ease-in-out duration-200"
          >
            {tittle}
          </Link>
          :
          <div className="relative group ">
            <p className="font-semibold p-1 border-b border-black/0  hover:border-b  hover:border-[#FF7F2C] hover:text-[#FF7F2C] ease-in-out duration-200 cursor-default">{tittle}</p>
            <div className="absolute top-full left-0 hidden group-hover:grid shadow-2xl bg-white p-2 rounded-lg transition-all">
              {urls && urls.map((link) =>
                <Link
                  to={link.url}
                  className="font-semibold p-1 border-b border-black/0  hover:border-b  hover:border-[#FF7F2C] hover:text-[#FF7F2C] ease-in-out duration-200"
                >
                  {link.tittle}
                </Link>
              )}
            </div>
          </div>
        }

      </>
    )
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logoSvg} alt="logo" className="h-5" />
          </Link>
          <div className="max-md:hidden flex">
            <SearchHeader />
          </div>
          <div className="flex gap-4 max-md:hidden">
            {linksLists &&
              linksLists.map((item) => <LinksComponent tittle={item.tittle} url={item.url} urls={item.urls} />)}
          </div>
          <button onClick={() => setIsOpenModal(true)} className="max-md:hidden bg-[#FF7F2C] py-2 px-4 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200">
            Войти
          </button>
          <div className="md:hidden">
            <IconButton aria-label="delete" size="large" onClick={() => setOpenHamburger(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <HeaderModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
      <Hamburger linksLists={linksLists} openHamburger={openHamburger} setOpenHamburger={setOpenHamburger} />
    </div>
  );
}

export default Header;
