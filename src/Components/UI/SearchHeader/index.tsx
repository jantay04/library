import React, {useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {IconButton } from "@mui/material";

type Props = {}

function SearchHeader({ }: Props) {
    const [search, setSearch] = useState("");
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
    )
}

export default SearchHeader