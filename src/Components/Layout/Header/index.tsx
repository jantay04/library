import React from "react";
import logoSvg from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";

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
    url: "/contact",
  },
];

function Header({}: Props) {
  const SearchComponent = () => {
    const [search, setSearch] = React.useState("");
    return (
      <label className="xl:w-96 relative">
        <SearchIcon className="absolute top-[8px] left-[10px] cursor-pointer h-6 w-6 " />
        <input
          className="w-full h-10 pl-10 pr-10  bg-none bg-[#FEF7E8] text-black outline-none placeholder:text-[#515A61] rounded focus:"
          placeholder="Книга / Автор"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <div className="absolute top-[4px] right-[10px]">
            <IconButton aria-label="delete" size="small">
              <CloseIcon
                className=" cursor-pointer h-6 w-6"
                onClick={() => setSearch("")}
              />
            </IconButton>
          </div>
        )}
        {search && (
          <div className="absolute top-[92%] left-0 w-full  bg-[#FEF7E8] shadow-sm border-t rounded-br rounded-bl">
            <h2 className="hover:bg-black/5 p-1 pl-9">Книга 1</h2>
            <h2 className="hover:bg-black/5 p-1 pl-9">Книга 2</h2>
            <h2 className="hover:bg-black/5 p-1 pl-9">Книга 3</h2>
          </div>
        )}
      </label>
    );
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logoSvg} alt="logo" className="h-5" />
          </Link>
          <SearchComponent />
          <div className="flex gap-4 ">
            {linksLists &&
              linksLists.map((item) => (
                <Link
                  to={item.url}
                  className="font-semibold p-1 border-b border-black/0  hover:border-b  hover:border-[#FF7F2C] hover:text-[#FF7F2C] ease-in-out duration-200"
                >
                  {item.tittle}
                </Link>
              ))}
          </div>
          <button className="bg-[#FF7F2C] py-2 px-4 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
