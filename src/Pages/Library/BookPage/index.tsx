import React, { useEffect, useState } from 'react'
import MainLayout from '../../../Components/Layout/MainLayout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import IconButton from '@mui/material/IconButton/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button/Button';
import BreadCrumb from '../../../Components/BreadCrumb';

type Props = {}

type Book = {
  id: number,
  name: string,
  author: string,
  year: string,
  genre: string,
  description: string,
  rating: number,
  imageUrl: any,
  pdf: string
}

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#FF7F2C",
  },
  "& .MuiRating-iconHover": {
    color: "#FF7F2C",
  },
});


function BookPage({ }: Props) {
  const { id } = useParams();

  const [loading, setLoading] = useState(false)

  const [appState, setAppState] = useState()

  let [isLike, setLike] = useState(false);

  const [bookData, setBookData] = useState<Book | null>()

  const apiUrl = `http://localhost:4000/books/${id}`;
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setBookData(response.data))
      .catch((error) => console.error(error));
  }, [apiUrl]);

  return (
    <MainLayout>
      <div className='  max-w-7xl mx-auto p-4'>
        <BreadCrumb/>
        <div className='grid grid-cols-12 gap-16'>
          <div className='col-span-4'>
            <img className=' rounded-xl w-full mt-2' src={bookData?.imageUrl} alt={bookData?.name} />
            <div className='flex gap-2 mt-5'>
              <Button fullWidth type='submit' color="secondary" variant="contained" size='large' sx={{ textTransform: "capitalize", borderRadius: 2 }} >
                Читать
              </Button>
              <Button fullWidth variant="outlined" size='large' sx={{ textTransform: "capitalize", borderRadius: 2, color: '#1D324E', borderColor: 'gray' }}>
                Скачать
              </Button>
            </div>
          </div>
          <div className='col-span-8'>
            <div className='flex justify-between'>
              <StyledRating
                className="mt-2"
                defaultValue={4}
                readOnly
              />
              <div className='mb-1'>
                <button className="" onClick={() => setLike(!isLike)}>
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
            </div>
            <div className='grid gap-1 text-base text-[#515A61]'>
              <h3>Название книги: <span className='text-[#1D324E] font-semibold'>{bookData?.name}</span></h3>
              <h3>Автор: <span className='text-[#1D324E] font-semibold'>{bookData?.author}</span></h3>
              <h3>Год издания: <span className='text-[#1D324E] font-semibold'>{bookData?.year}</span></h3>
              <h3>Жанр: <span className='text-[#1D324E] font-semibold'>{bookData?.genre}</span></h3>
              <h3>Рейтинг: <span className='text-[#1D324E] font-semibold'>{bookData?.rating}</span></h3>
            </div>
            <p className='mt-4'>{bookData?.description}</p>

          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default BookPage