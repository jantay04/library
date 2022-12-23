import React, { useState } from "react";
import book from "./assets/Book1.svg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Like from "../Card/assets/like.svg";
import LikeFill from "../Card/assets/like-svg.svg";

type Props = {};

const Card = (props: Props) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FFAA73",
    },
    "& .MuiRating-iconHover": {
      color: "#FF7F2C",
    },
  });

  let [isLike, setLike] = useState(false);

  //   function Prov() {
  //     console.log(!isLike);
  //     isLike = !isLike;
  //     // setLike = !isLike;
  //   }
  return (
    <div>
      <div>
        <div className="flex flex-col justify-between h-auto w-52">
          <img className="mr-0" src={book} alt="" />
          <div className="flex justify-between">
            <StyledRating
              className="mt-2"
              name="customized-color"
              defaultValue={2}
              getLabelText={(value: number) =>
                `${value} Star${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              // readOnly
            />
            <button className="mr-2" onClick={() => setLike(!isLike)}>
              {isLike ? (
                <img src={LikeFill} alt="" />
              ) : (
                <img src={Like} alt="" />
              )}
            </button>
          </div>
          <h3 className="text-ourBlue font-bold">
            Пиши, сокращай
            <br />
            М. Ильяхов, Л. Сарычена
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
