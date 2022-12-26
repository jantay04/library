import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import IconButton from '@mui/material/IconButton/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
type Props = {
  id: number,
  bookUrl: any,
  name: string,
  author: string,
  rating: number,
}


function BookCard({ bookUrl, name, author, rating, id }: Props) {

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FF7F2C",
    },
    "& .MuiRating-iconHover": {
      color: "#FF7F2C",
    },
  });

  let [isLike, setLike] = useState(false);

  console.log(bookUrl)

  return (<>

    <div className="flex flex-col justify-between ">
      <Link to={`${id}`}>
        <img className="rounded-lg w-[200px] h-[270px] object-cover " src={bookUrl} alt="book" />
      </Link>
      <div className="flex justify-between">
        <StyledRating
          className="mt-2"
          defaultValue={rating}
          readOnly
        />

        <button className=" translate-x-1 translate-y-1" onClick={() => setLike(!isLike)}>
          {isLike ? (
            <IconButton size="small">
              <FavoriteBorderIcon style={{ color: 'red' }} />
            </IconButton>
          ) : (
            <IconButton size="small">
              <FavoriteIcon style={{ color: 'red' }} />
            </IconButton>
          )}
        </button>
      </div>
      <div className='text-ourBlue text-sm font-semibold'>
        <p>{name}</p>
        <p>{author}</p>
      </div>
    </div>
  </>
  )
}

export default BookCard